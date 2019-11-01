import React, { Component } from "react";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Panel} from 'primereact/panel';
import axios from 'axios';


class Report extends Component {
    state = {
        data: [],
        dataEstudiante: [],
        filtroAsignatura :'',
        filtroEstudiante :''

    };
    
    calificacionEditor = (props) => {
        return this.inputTextEditor(props, 'calificacion');
    }
    
    inputTextEditor = (props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(props, e.target.value)} keyfilter='pnum' />;
    }

    onEditorValueChange = (props, value) => {
        let updatedData = [...props.value];
        updatedData[props.rowIndex][props.field] = value;
        this.setState({data: updatedData});
    }

    sendNotes = () => {
        console.log(this.state.data)
        axios.get(`/api/historial?identificacion=7895`)
            .then(response => {
                console.log(response.data)
                const historial = response.data.map(element => ({
                    estudiante: element.estudiante.nombre,
                    identificacion: element.estudiante.identificacion,
                    calificacion: element.calificacion
                })
                );
                console.log(historial)
                this.setState({historial: historial});
            })
            .catch(function (error) {
                console.log(error.response.data);
            })
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
                const object = response.data.map(element => ({
                    estudiante: element.estudiante.nombre,
                    identificacion: element.estudiante.identificacion,
                    calificacion: element.calificacion
                })
                );
                console.log(object)
                this.setState({  data: object});
            })
            .catch(function (error) {
                console.log(error.response.data);
            })

    }
    consultaEstudiante = () =>{
       console.log( this.state.filtroEstudiante)
       axios.get(`/api/historial?identificacion=${this.state.filtroEstudiante}`)
            .then(response => {
                console.log(response.data)
                const historial = response.data.map(element => ({
                    materia: element.asignatura.nombre,
                    codigoMateria: element.asignatura.codigo,
                    docente: element.asignatura.docente.nombre,
                    semestre: element.semestre,
                    calificacion: element.calificacion
                })
                );
                console.log(historial)
                this.setState({  dataEstudiante: historial});
            })
            .catch(function (error) {
                console.log(error.response.data);
            })

    }

    
    render() {
        const header = <div style={{textAlign:'right'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="Descargar Listado" onClick={this.export}></Button></div>;
        const panelHeaderTable1 = <div className="content-section introduction"> 
                                <div className="feature-intro"> 
                                    <h1>Consulta de Matriculados</h1> 
                                </div>
                                <span className="p-float-label" style={{margin:' 1.5rem'}}>
                                    <InputText id="asignatura" value={this.state.filtroAsignatura} onChange={(e) => this.setState({filtroAsignatura: e.target.value})} style={{marginRight:' 1rem'}}/>
                                    <label htmlFor="in">Código Asignatura</label>
                                    <Button type="button" icon="pi pi-search" iconPos="left" label="Consultar" onClick={this.consulta}></Button>
                                </span>
                            </div>
        const panelHeaderTable2 = <div className="content-section introduction"> 
                                <div className="feature-intro"> 
                                    <h1>Consulta Historial Estudiante</h1> 
                                </div>
                                <span className="p-float-label" style={{margin:' 1.5rem'}}>
                                    <InputText id="estudiante" value={this.state.filtroEstudiante} onChange={(e) => this.setState({filtroEstudiante: e.target.value})} style={{marginRight:' 1rem'}}/>
                                    <label htmlFor="in">Identificación Estudiante</label>
                                    <Button type="button" icon="pi pi-search" iconPos="left" label="Consultar" onClick={this.consultaEstudiante}></Button>
                                </span>
                            </div>

        return (
            <div>
                <Panel header={panelHeaderTable1}>
                <div className="content-section implementation">
                
                    
                    <DataTable value={this.state.data} editable={true} header={header  } ref={(el) => { this.dt = el; }}>
                        <Column field="estudiante" header="Estudiante"  style={{height: '3.5em'}}/>
                        <Column field="identificacion" header="Identificación"  style={{height: '3.5em'}}/>
                        <Column field="calificacion" header="Calificación" editor={this.calificacionEditor} style={{height: '3.5em'}}/>
                    </DataTable>

                    {/* <Button type="button" label="Subir notas" style={{ float: 'right', margin:'1rem' }} className="p-button-rounded p-button-success"  onClick={this.sendNotes}/> */}
                </div>
                </Panel>
                <Panel header={panelHeaderTable2}>
                <div className="content-section implementation">
                
                    
                    <DataTable value={this.state.dataEstudiante}  header={header  } ref={(el) => { this.dt = el; }}>
                        <Column field="materia" header="Asignatura"  style={{height: '3.5em'}}/>
                        <Column field="codigoMateria" header="Código Asignatura"  style={{height: '3.5em'}}/>
                        <Column field="semestre" header="Semestre Matriculado"  style={{height: '3.5em'}}/>
                        <Column field="docente" header="Docente"  style={{height: '3.5em'}}/>
                        <Column field="calificacion" header="Calificación" style={{height: '3.5em'}}/>
                    </DataTable>

                    {/* <Button type="button" label="Subir notas" style={{ float: 'right', margin:'1rem' }} className="p-button-rounded p-button-success"  onClick={this.sendNotes}/> */}
                </div>
                </Panel>
            </div>
        );
    }
}

export { Report as default }