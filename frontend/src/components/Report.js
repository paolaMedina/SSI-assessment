import React, { Component } from "react";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Panel} from 'primereact/panel';


class Report extends Component {
    state = {
        cars1: [ {estudiante:'jjj',identificacion:'ttt', calificacion:'hhghh'}, {estudiante:'jjj',identificacion:'ttt', calificacion:'hhghh'}, {estudiante:'jjj',identificacion:'ttt', calificacion:'hhghh'}]
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

    
    render() {
        const header = <div style={{textAlign:'right'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="Descargar Listado" onClick={this.export}></Button></div>;
        const panelHeader = <div className="content-section introduction"> <div className="feature-intro"> <h1>Consulta de Matriculados</h1> <p>Por favor ingrese la asignatura a consultar.</p>
        </div>
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