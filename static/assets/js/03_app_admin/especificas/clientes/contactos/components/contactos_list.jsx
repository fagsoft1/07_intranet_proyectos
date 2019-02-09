import React, {Component} from 'react';
import CreateForm from '../components/forms/contacto_form';
import Tabla from '../components/contactos_tabla';
import crudHOC from '../../../../../00_utilities/components/hoc_crud';


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
        this.plural_name = 'Contactos';
        this.singular_name = 'Contacto';
    }

    successSubmitCallback(item) {
        const nombre = `${item.nombres} ${item.apellidos}`;
        const {noCargando, notificarAction} = this.props;
        notificarAction(`Se ha ${item.id ? 'actualizado' : 'creado'} con éxito ${this.singular_name.toLowerCase()} ${nombre}`);
        noCargando()
    }


    successDeleteCallback(item) {
        const nombre = `${item.nombres} ${item.apellidos}`;
        const {noCargando, notificarAction} = this.props;
        notificarAction(`Se ha eliminado con éxito ${this.singular_name.toLowerCase()} ${nombre}`);
        noCargando()
    }

    fetchObjectMethod(item_id, successCallback) {
        const callback = (item) => {
            successCallback(item);
        };
        this.props.fetchContactoCliente(item_id, {callback});
    }

    createObjectMethod(item, successCallback) {
        const callback = () => {
            this.successSubmitCallback(item);
            successCallback();
        };
        this.props.createContactoCliente(item, {callback});
    }

    updateObjectMethod(item, successCallback) {
        const callback = () => {
            this.successSubmitCallback(item);
            successCallback();
        };
        this.props.updateContactoCliente(item.id, item, {callback});
    }

    deleteObjectMethod(item, successCallback) {
        const callback = () => {
            this.successDeleteCallback(item);
            successCallback();
        };
        this.props.deleteContactoCliente(item.id, {callback});
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