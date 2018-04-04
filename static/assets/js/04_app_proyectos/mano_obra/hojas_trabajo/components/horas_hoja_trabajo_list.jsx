import React, {Component} from 'react';
import CreateForm from './forms/hora_hoja_trabajo_form';
import Tabla from './horas_hojas_trabajos_tabla';
import crudHOC from '../../../../00_utilities/components/hoc_crud';
import {fechaFormatoUno} from '../../../../00_utilities/common';


const CRUD = crudHOC(CreateForm, Tabla);

class List extends Component {
    constructor(props) {
        super(props);
        this.method_pool = {
            fetchObjectMethod: this.fetchObjectMethod.bind(this),
            deleteObjectMethod: this.deleteObjectMethod.bind(this),
            createObjectMethod: this.createObjectMethod.bind(this),
            updateObjectMethod: this.updateObjectMethod.bind(this),
        };
        this.plural_name = 'Horas Hojas de Trabajo';
        this.singular_name = 'Hora Hoja de Trabajo';
    }

    successSubmitCallback(item) {
        const nombre = `en ${fechaFormatoUno(item.fecha)} para ${item.colaborador_nombre}`;
        const {noCargando, notificarAction} = this.props;
        notificarAction(`Se ha ${item.id ? 'actualizado' : 'creado'} con éxito ${this.singular_name.toLowerCase()} ${nombre}`);
        noCargando()
    }


    successDeleteCallback(item) {
        const nombre = `en ${fechaFormatoUno(item.fecha)} para ${item.colaborador_nombre}`;
        const {noCargando, notificarAction} = this.props;
        notificarAction(`Se ha eliminado con éxito ${this.singular_name.toLowerCase()} ${nombre}`);
        noCargando()
    }

    fetchObjectMethod(item_id, successCallback) {
        const {cargando, noCargando, notificarErrorAjaxAction} = this.props;
        const success_method = (item) => {
            successCallback(item);
            this.props.fetchHojaTrabajo(item.hoja, () => noCargando(), notificarErrorAjaxAction);
        };
        cargando();
        this.props.fetchHoraHojaTrabajo(item_id, success_method, notificarErrorAjaxAction);
    }

    createObjectMethod(item, successCallback) {
        const {cargando, notificarErrorAjaxAction} = this.props;
        const success_method = () => {
            this.successSubmitCallback(item);
            successCallback();
        };
        cargando();
        const cargarHojaTrabajo = (r) => this.props.fetchHojaTrabajo(r.hoja, success_method, notificarErrorAjaxAction);
        this.props.createHoraHojaTrabajo(item, cargarHojaTrabajo, notificarErrorAjaxAction);
    }

    updateObjectMethod(item, successCallback) {
        const {cargando, notificarErrorAjaxAction} = this.props;
        const success_method = () => {
            this.successSubmitCallback(item);
            successCallback();
        };
        cargando();
        const cargarHojaTrabajo = (r) => this.props.fetchHojaTrabajo(r.hoja, success_method, notificarErrorAjaxAction);
        this.props.updateHoraHojaTrabajo(item.id, item, cargarHojaTrabajo, notificarErrorAjaxAction);
    }

    deleteObjectMethod(item, successCallback) {
        const {cargando, notificarErrorAjaxAction} = this.props;
        const success_method = () => {
            this.successDeleteCallback(item);
            successCallback();
        };
        cargando();
        const hoja = item.hoja;
        const cargarHojaTrabajo = () => this.props.fetchHojaTrabajo(hoja, success_method, notificarErrorAjaxAction);
        this.props.deleteHoraHojaTrabajo(item.id, cargarHojaTrabajo, notificarErrorAjaxAction);
    }

    render() {
        const {object_list, permisos_object} = this.props;
        return (
            <CRUD
                method_pool={this.method_pool}
                list={object_list}
                permisos_object={permisos_object}
                plural_name={this.plural_name}
                singular_name={this.singular_name}
                {...this.props}
            />
        )
    }
}

export default List;