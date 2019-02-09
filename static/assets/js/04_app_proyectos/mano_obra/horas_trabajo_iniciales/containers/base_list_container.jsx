import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../../01_actions/01_index";
import CargarDatos from "../../../../00_utilities/components/system/cargar_datos";
import {
    HORAS_COLABORADORES_PROYECTOS_INICIALES as permisos_view
} from "../../../../00_utilities/permisos/types";
import {permisosAdapter} from "../../../../00_utilities/common";

import ListCrud from '../components/base_list';


class List extends Component {
    constructor(props) {
        super(props);
        this.cargarDatos = this.cargarDatos.bind(this);
    }

    componentDidMount() {
        this.cargarDatos();
    }

    componentWillUnmount() {
        this.props.clearHorasColaboradoresProyectosIniciales();
        this.props.clearProyectos();
        this.props.clearColaboradores();
        this.props.clearCentrosCostosColaboradores();
        this.props.clearLiterales();
    }

    cargarDatos() {
        const cargarHorasIniciales = () => this.props.fetchHorasColaboradoresProyectosIniciales();
        this.props.fetchMisPermisos({callback:cargarHorasIniciales})

    }

    render() {
        const {object_list, mis_permisos} = this.props;
        const bloque_1_permisos = permisosAdapter(mis_permisos, permisos_view);
        return (
            <Fragment>
                <ListCrud
                    object_list={object_list}
                    permisos_object={bloque_1_permisos}
                    {...this.props}
                />
                <CargarDatos
                    cargarDatos={this.cargarDatos}
                />
            </Fragment>
        )
    }
}

function mapPropsToState(state, ownProps) {
    return {
        mis_permisos: state.mis_permisos,
        object_list: state.horas_colaboradores_proyectos_iniciales,
        colaboradores_list: state.colaboradores,
        centros_costos_list: state.centros_costos_colaboradores,
        literales_list: state.literales,
        proyectos_list: state.proyectos,
    }
}

export default connect(mapPropsToState, actions)(List)