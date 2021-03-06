import React, {Fragment} from 'react';
import {fechaFormatoUno, pesosColombianos} from "../../../../00_utilities/common";
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const InfoProyecto = (props) => {
    const {proyecto, cotizaciones_permisos, cotizaciones_proyecto_list} = props;
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
                <span><strong>Proyecto: </strong><small>{proyecto.id_proyecto}</small></span>
            </div>
            <div className="col-12 col-md-6">
                <span><strong>Nombre: </strong><small>{proyecto.nombre}</small></span>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                    <span><strong>Sincronizado: </strong>
                        <FontAwesomeIcon
                            icon={proyecto.en_cguno ? 'check' : 'times'}
                        />
                    </span>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <span><strong>Precio: </strong><small>{pesosColombianos(proyecto.valor_cliente)}</small></span>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <span><strong>Costo Presupuestado: </strong><small>{pesosColombianos(proyecto.costo_presupuestado)}</small></span>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <span><strong>Nro. OC: </strong><small>{proyecto.orden_compra_nro}</small></span>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                                <span><strong>Abierto: </strong>
                                    <FontAwesomeIcon
                                        icon={proyecto.abierto ? 'check' : 'times'}
                                    />
                                </span>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-md-6">
                                        <span><strong>Fecha OC: </strong><small>
                                            {
                                                proyecto.orden_compra_fecha ? fechaFormatoUno(proyecto.orden_compra_fecha) : 'Sin Definir'
                                            }
                                            </small></span>
                    </div>
                    <div className="col-12 col-md-6">
                                        <span><strong>Fecha Pactada Entrega: </strong><small>
                                            {
                                                proyecto.fecha_entrega_pactada ? fechaFormatoUno(proyecto.fecha_entrega_pactada) : 'Sin Definir'
                                            }
                                        </small></span>
                    </div>
                </div>
            </div>
            {
                cotizaciones_proyecto_list.length > 0 &&
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <span><strong>Cotizacion: </strong><small>
                                {_.orderBy(cotizaciones_proyecto_list, ['tipo'], ['desc']).map(e => {
                                    return (
                                        <Fragment key={e.cotizacion}>
                                            {cotizaciones_permisos.detail ?
                                                <span>[<Link
                                                    to={`/app/ventas/cotizaciones/cotizaciones/detail/${e.cotizacion}`}>
                                                {e.cotizacion_nro}
                                            </Link>({e.tipo})] </span> :
                                                <span>[{e.cotizacion_nro}({e.tipo})] </span>
                                            }
                                        </Fragment>
                                    )
                                })}
                    </small></span>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
};

export default InfoProyecto;