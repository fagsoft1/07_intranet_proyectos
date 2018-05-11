import React, {Fragment, Component} from 'react';
import {pesosColombianos} from "../../../../../../00_utilities/common";
import TablaProyectoLiteralesMateriales from '../../literales/components/proyectos_literales_materiales_tabla';
import TablaProyectoLiteralesManoObra from '../../literales/components/proyectos_literales_mano_obra_tabla';
import InformacionLiteralGeneral from '../../literales/components/proyectos_literales_general';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class LiteralDetail extends Component {
    constructor(props) {
        super(props);
        this.onUpdateLiteral = this.onUpdateLiteral.bind(this);
        this.onDeleteLiteral = this.onDeleteLiteral.bind(this);
    }

    onUpdateLiteral(literal) {
        const {cargando, noCargando, notificarErrorAjaxAction, setCurrentLiteral} = this.props;
        cargando();
        this.props.updateLiteral(
            literal.id,
            literal,
            (response) => {
                noCargando();
                setCurrentLiteral(response);
            }, notificarErrorAjaxAction);
    }

    onDeleteLiteral(literal) {
        const {cargando, noCargando, notificarErrorAjaxAction, setCurrentLiteral} = this.props;
        cargando();
        this.props.deleteLiteral(
            literal.id,
            () => {
                noCargando();
                setCurrentLiteral(null);
            }, notificarErrorAjaxAction
        );
    }

    render() {
        const {
            literal,
            permisos,
            proyecto,
            items_literales,
            horas_hojas_trabajos_list,
            horas_colaboradores_proyectos_iniciales_list,
        } = this.props;
        return (
            <Fragment>
                <div className="row">
                    <div className="col-12">
                        <h4 className="h4-responsive">Literal: <small>{literal.id_literal}</small>
                        </h4>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <h5 className='h5-response'>{literal.descripcion}</h5>
                            </div>
                            {
                                permisos.costo_materiales &&
                                <div className="col-12">
                                    <h6 className='h6-response'>Costo
                                        Materiales: <small>{pesosColombianos(literal.costo_materiales)}</small>
                                    </h6>
                                </div>
                            }
                            {permisos.costo_mano_obra &&
                            <div className="col-12">
                                <h6 className='h6-response'>Costo
                                    Mano
                                    Obra: <small>{pesosColombianos(Number(literal.costo_mano_obra) + Number(literal.costo_mano_obra_inicial))}</small>
                                </h6>
                            </div>
                            }
                            {
                                permisos.costo &&
                                <div className="col-12">
                                    <h6 className='h6-response'>Costo
                                        Total: <small>{pesosColombianos(Number(literal.costo_mano_obra_inicial) + Number(literal.costo_mano_obra) + Number(literal.costo_materiales))}</small>
                                    </h6>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <Tabs>
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Materiales</Tab>
                        <Tab>Mano Obra</Tab>
                    </TabList>
                    <TabPanel>
                        <InformacionLiteralGeneral
                            proyecto={proyecto}
                            literal={literal}
                            onUpdateLiteral={this.onUpdateLiteral}
                            onDeleteLiteral={this.onDeleteLiteral}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TablaProyectoLiteralesMateriales
                            items_literales={items_literales}
                            can_see_ultimo_costo_item_biable={permisos.ultimo_costo_item_biable}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TablaProyectoLiteralesManoObra
                            horas_mano_obra_literales={horas_hojas_trabajos_list}
                            horas_colaboradores_proyectos_iniciales_list={horas_colaboradores_proyectos_iniciales_list}
                        />
                    </TabPanel>
                </Tabs>
            </Fragment>
        )
    }
};

export default LiteralDetail;