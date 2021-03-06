import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../../01_actions/01_index";
import CargarDatos from "../../../../00_utilities/components/system/cargar_datos";
import {Titulo} from "../../../../00_utilities/templates/fragmentos";
import ValidarPermisos from "../../../../00_utilities/permisos/validar_permisos";
import {permisosAdapter} from "../../../../00_utilities/common";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    BANDA_EUROBELT_COLORES as colores_permisos_view,
    BANDA_EUROBELT_TIPOS as tipos_permisos_view,
    BANDA_EUROBELT_MATERIALES as materiales_permisos_view,
    BANDA_EUROBELT_SERIES as series_permisos_view,
    BANDA_EUROBELT_CATEGORIAS_DOS as categorias_permisos_view,
    BANDA_EUROBELT_COMPONENTES as componentes_permisos_view,
} from "../../../../00_utilities/permisos/types";

import BloqueTipos from "../../tipos/components/tipos_list";
import BloqueMateriales from "../../materiales/components/materiales_list";
import BloqueColores from "../../colores/components/colores_list";
import BloqueSeries from "../../series/components/series_list";
import BloqueCategorias from "../../categorias_dos/components/categoria_dos_list";
import BloqueComponentes from "../../componentes/components/componentes_list";

class ItemsDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
        this.plural_name = 'Elementos Bandas';
        this.singular_name = 'Elemento Banda';
        this.cargarDatos = this.cargarDatos.bind(this);
    }

    cargarDatos() {
        const {slideIndex} = this.state;
        this.cargarElementos(slideIndex)
    }

    cargarElementos(value = null) {
        let index = value !== null ? value : this.state.slideIndex;
        const cargarCategorias = () => this.props.fetchCategoriasProductos();
        if (index === 0) {
            const cargarCategorias = () => this.props.fetchBandaEurobeltCategorias();
            const cargarSeries = () => this.props.fetchBandaEurobeltSeries({callback: cargarCategorias});
            const cargarColores = () => this.props.fetchBandaEurobeltColores({callback: cargarSeries});
            const cargarMateriales = () => this.props.fetchBandaEurobeltMateriales({callback: cargarColores});
            const cargarTipos = () => this.props.fetchBandaEurobeltTipos({callback: cargarMateriales});
            this.props.fetchBandaEurobeltComponentes({callback: cargarTipos})
        }
        if (index === 1) {
            this.props.fetchBandaEurobeltTipos({callback: cargarCategorias});
        }
        if (index === 2) {
            this.props.fetchBandaEurobeltMateriales();
        }
        if (index === 3) {
            this.props.fetchBandaEurobeltColores();
        }
        if (index === 4) {
            this.props.fetchBandaEurobeltSeries();
        }
        if (index === 5) {
            this.props.fetchBandaEurobeltCategorias({callback: cargarCategorias});
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
        const {tipos, series, materiales, colores, categorias_dos, componentes} = this.props;
        const {slideIndex} = this.state;
        const permisos_materiales = permisosAdapter(materiales_permisos_view);
        const permisos_series = permisosAdapter(series_permisos_view);
        const permisos_colores = permisosAdapter(colores_permisos_view);
        const permisos_tipos = permisosAdapter(tipos_permisos_view);
        const permisos_categorias = permisosAdapter(categorias_permisos_view);
        const permisos_componentes = permisosAdapter(componentes_permisos_view);

        const can_see = permisos_materiales.list ||
            permisos_series.list ||
            permisos_colores.list ||
            permisos_categorias.list ||
            permisos_componentes.list ||
            permisos_tipos.list;
        return (
            <ValidarPermisos can_see={can_see} nombre={this.plural_name}>
                <Titulo>{this.singular_name}</Titulo>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    value={slideIndex}
                >
                    <Tab label="Componentes"/>
                    <Tab label="Tipos"/>
                    <Tab label="Materiales"/>
                    <Tab label="Colores"/>
                    <Tab label="Series"/>
                    <Tab label="Categorias Dos"/>
                </Tabs>
                {
                    slideIndex === 0 &&
                    <BloqueComponentes
                        object_list={componentes}
                        tipos_list={tipos}
                        materiales_list={materiales}
                        colores_list={colores}
                        series_list={series}
                        categorias_list={categorias_dos}
                        permisos_object={permisos_tipos}
                        {...this.props}
                    />
                }
                {
                    slideIndex === 1 &&
                    <BloqueTipos
                        object_list={tipos}
                        categorias_list={categorias_dos}
                        permisos_object={permisos_tipos}
                        {...this.props}
                    />
                }
                {
                    slideIndex === 2 &&
                    <BloqueMateriales
                        object_list={materiales}
                        permisos_object={permisos_materiales}
                        {...this.props}
                    />
                }
                {
                    slideIndex === 3 &&
                    <BloqueColores
                        object_list={colores}
                        permisos_object={permisos_colores}
                        {...this.props}
                    />
                }
                {
                    slideIndex === 4 &&
                    <BloqueSeries
                        object_list={series}
                        permisos_object={permisos_series}
                        {...this.props}
                    />
                }
                {
                    slideIndex === 5 &&
                    <BloqueCategorias
                        object_list={categorias_dos}
                        permisos_object={permisos_series}
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
        tipos: state.banda_eurobelt_tipos,
        series: state.banda_eurobelt_series,
        materiales: state.banda_eurobelt_materiales,
        colores: state.banda_eurobelt_colores,
        categorias_dos: state.banda_eurobelt_categorias_dos,
        categorias: state.categorias_productos,
        componentes: state.banda_eurobelt_componentes
    }
}

export default connect(mapPropsToState, actions)(ItemsDashboard)