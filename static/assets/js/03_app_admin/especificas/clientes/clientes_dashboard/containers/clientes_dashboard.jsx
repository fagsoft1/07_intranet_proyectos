import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../../../01_actions/01_index";
import CargarDatos from "../../../../../00_utilities/components/system/cargar_datos";
import {Titulo} from "../../../../../00_utilities/templates/fragmentos";
import ValidarPermisos from "../../../../../00_utilities/permisos/validar_permisos";
import {permisosAdapter} from "../../../../../00_utilities/common";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    CANALES_DISTRIBUCIONES as canales_permisos_view,
    TIPOS_INDUSTRIAS as tipos_industrias_permisos_view
} from "../../../../../00_utilities/permisos/types";
import BloquePaises from "../../canales/components/canales_list";
import BloqueDepartamentos from "../../tipos_industrias/components/tipos_industrias_list";

class ClientesDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
        this.plural_name = 'Panel Cliente';
        this.singular_name = 'Panel Cliente';
        this.cargarDatos = this.cargarDatos.bind(this);
    }

    cargarDatos() {
        const {slideIndex} = this.state;
        this.cargarElementos(slideIndex)
    }

    cargarElementos(value = null) {
        let index = value !== null ? value : this.state.slideIndex;
        if (index === 0) {
            this.props.fetchCanalesDistribuciones();
        } else if (index === 1) {
            this.props.fetchTiposIndustrias();
        }
    }

    handleChange = (event, value) => {
        if (value !== this.state.slideIndex) {
            this.cargarElementos(value);
        }
        this.setState({
            slideIndex: value,
        });
    };

    componentDidMount() {
        this.cargarDatos();
    }

    render() {
        const {canales, tipos_industrias} = this.props;
        const {slideIndex} = this.state;
        const permisos_canales = permisosAdapter(canales_permisos_view);
        const permisos_tipos_industrias = permisosAdapter(tipos_industrias_permisos_view);

        const can_see =
            permisos_canales.list ||
            permisos_tipos_industrias.list;
        return (
            <ValidarPermisos can_see={can_see} nombre={this.plural_name}>
                <Titulo>{this.singular_name}</Titulo>

                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    value={slideIndex}
                >
                    <Tab label="Canales"/>
                    <Tab label="Tipos Industrias"/>
                </Tabs>

                {
                    slideIndex === 0 &&
                    <BloquePaises
                        object_list={canales}
                        permisos_object={permisos_canales}
                        {...this.props}
                    />
                }
                {
                    slideIndex === 1 &&
                    <BloqueDepartamentos
                        object_list={tipos_industrias}
                        permisos_object={permisos_tipos_industrias}
                        {...this.props}
                    />
                }
                <CargarDatos
                    cargarDatos={this.cargarDatos}
                />
            </ValidarPermisos>
        )
    }

}


function mapPropsToState(state, ownProps) {
    return {
        mis_permisos: state.mis_permisos,
        canales: state.clientes_canales,
        tipos_industrias: state.clientes_tipos_industrias
    }
}

export default connect(mapPropsToState, actions)(ClientesDashboard)