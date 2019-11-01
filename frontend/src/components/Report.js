import React, { Component } from "react";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Panel} from 'primereact/panel';
import axios from 'axios';


class Report extends Component {
    state = {
        cars1: [{ estudiante: 'Prueba 1', identificacion: '123', calificacion: '2.0' }, { estudiante: 'Prueba 2', identificacion: '1234', calificacion: '5.0' }, { estudiante: 'Prueba 3', identificacion: '12345', calificacion: '3.8' }],
        filtroAsignatura :''

    };
    
    calificacionEditor = (props) => {
        return this.inputTextEditor(props, 'calificacion');
    }
    
    inputTextEditor = (props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(props, e.target.value)} keyfilter='pnum' />;
    }

    onEditorValueChange = (props, value) => {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars1: updatedCars});
    }

    sendNotes = () => {
        console.log(this.state)
    }

    export = () => {
        console.log(this.dt)
        this.dt.exportCSV();
    }

    consulta = () =>{
       console.log( this.state.filtroAsignatura)
       axios.get(`/api/matricula?codigo=${this.state.filtroAsignatura}`)
            .then(response => {
                console.log(response.data)
                const publications = response.data.map(element => ({
                    estudiante: element.estudiante.nombre,
                    identificacion: element.estudiante.identificacion,
                    calificacion: element.calificacion
                })
                );
                console.log(publications)
                this.setState({  cars1: publications});
            })
            .catch(function (error) {
                console.log(error.response.data);
            })

    }

    
    render() {
        const header = <div style={{textAlign:'right'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="Descargar Listado" onClick={this.export}></Button></div>;
        const panelHeader = <div className="content-section introduction"> 
                                <div className="feature-intro"> 
                                    <h1>Consulta de Matriculados</h1> 
                                    {/* <p>Por favor ingrese la asignatura a consultar.</p> */}
                                </div>
                                <span className="p-float-label" style={{margin:' 1.5rem'}}>
                                    <InputText id="asignatura" value={this.state.filtroAsignatura} onChange={(e) => this.setState({filtroAsignatura: e.target.value})} style={{marginRight:' 1rem'}}/>
                                    <label htmlFor="in">Código Asignatura</label>
                                    <Button type="button" icon="pi pi-external-link" iconPos="left" label="Consultar" onClick={this.consulta}></Button>
                                </span>
                            </div>

        return (
            <div>
                <Panel header={panelHeader}>
                <div className="content-section implementation">
                
                    
                    <DataTable value={this.state.cars1} editable={true} header={header  } ref={(el) => { this.dt = el; }}>
                        <Column field="estudiante" header="Estudiante"  style={{height: '3.5em'}}/>
                        <Column field="identificacion" header="Identificación"  style={{height: '3.5em'}}/>
                        <Column field="calificacion" header="Calificación" editor={this.calificacionEditor} style={{height: '3.5em'}}/>
                    </DataTable>

                    <Button type="button" label="Subir notas" style={{ float: 'right', margin:'1rem' }} className="p-button-rounded p-button-success"  onClick={this.sendNotes}/>
                </div>
                </Panel>
            </div>
        );
    }
}

export { Report as default }