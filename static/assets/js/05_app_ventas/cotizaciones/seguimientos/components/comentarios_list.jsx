import React, {Component} from 'react';
import {fechaHoraFormatoUno} from "../../../../00_utilities/common";
import FormComentario from "./forms/comentario_form";

import moment from 'moment-timezone';
import momentLocaliser from "react-widgets-moment";

moment.tz.setDefault("America/Bogota");
moment.locale('es');
momentLocaliser(moment);

const Comentario = (props) => {
    const {comentario, eliminarSeguimiento} = props;
    const mi_cuenta = JSON.parse(localStorage.getItem('mi_cuenta'));
    const ahora = moment(new Date);
    const creacion = moment(comentario.created);
    const tiempo_creacion = ahora.diff(creacion, "minutes");
    const es_usuario_que_creo = mi_cuenta.id === comentario.creado_por;
    const puede_borrar_comentario = es_usuario_que_creo && tiempo_creacion<4;
    return (
        <div className="card mt-2">
            <div className="card-heading p-2" style={{backgroundColor: 'lightgray'}}>
                <div className="row">
                    <div className='col-11'>
                        <strong>{comentario.creado_por_username}</strong> <span
                        className="text-muted">{fechaHoraFormatoUno(comentario.created)}</span>
                    </div>
                    <div className='col-1 text-right'>
                        {puede_borrar_comentario &&
                        <span className='puntero' onClick={() => eliminarSeguimiento(comentario.id)}>x</span>}
                    </div>
                </div>
            </div>
            <div className="card-body p-3">
                {comentario.observacion}
            </div>
        </div>
    )
};

export default class ComentariosList extends Component {
    render() {
        const {seguimiento_list, guardarComentario} = this.props;
        const comentarios_array = _.map(_.orderBy(_.pickBy(seguimiento_list, s => s.tipo_seguimiento === 0), ['id'], ['desc']));
        return (
            <div className="col-xs-12">
                <div className="page-header">
                    <h1>
                        Comentarios<span className="badge badge-pill badge-primary">{comentarios_array.length}</span>
                    </h1>
                </div>
                <div className="col-12">
                    <FormComentario
                        onSubmit={guardarComentario}
                    />
                </div>
                {comentarios_array.map(comentario => <Comentario key={comentario.id}
                                                                 comentario={comentario}
                                                                 {...this.props}
                />)}

            </div>
        )
    }
}