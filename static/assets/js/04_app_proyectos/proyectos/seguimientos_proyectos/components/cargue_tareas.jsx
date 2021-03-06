import React, {Component, Fragment} from 'react';
import ReactFileReader from 'react-file-reader';
import Button from '@material-ui/core/Button';

class CargueTareas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cabecera: ['descripcion', 'campo_uno', 'campo_dos', 'campo_tres', 'ano', 'mes', 'dia', 'asignado_a_id'],
            error_columnas: null,
            archivo: null
        };
        this.inputFileChanged = this.inputFileChanged.bind(this);
    }

    inputFileChanged(files) {
        const reader = new FileReader();
        const scope = this;
        this.setState({archivo: files[0]});
        reader.onload = () => {
            const {cabecera} = scope.state;
            const separado_lineas = reader.result.split('\n');
            const cabecera_archivo = _.split(separado_lineas[0], ';').map(e => _.trim(e));
            const columnas_iguales = _.isEqual(cabecera_archivo, cabecera);
            scope.setState({error_columnas: columnas_iguales ? null : true});
            if (columnas_iguales) {
                let resultado = _.map(separado_lineas, e => {
                    const lineas = _.split(_.deburr(e), ';');
                    let objeto = {};
                    cabecera.map(c => {
                        const index = _.indexOf(cabecera, c);
                        objeto = {...objeto, [c]: _.trim(lineas[index])}
                    });
                    return objeto
                });
                scope.onCargarListado(resultado)
            }
        };
        reader.readAsText(files[0]);
    }

    onCargarListado(listado_cargue) {
        const {fase} = this.props;
        const cargue = _.map(listado_cargue, e => {
            return (
                {
                    descripcion: e.descripcion,
                    campo_uno: e.campo_uno,
                    campo_dos: e.campo_dos,
                    campo_tres: e.campo_tres,
                    ano: e.ano,
                    mes: e.mes,
                    dia: e.dia,
                    asignado_a_id: e.asignado_a_id,
                }
            )
        });
        this.props.cargarTareasFaseLiteral(
            fase.id,
            cargue,
            {
                callback: () => {
                    this.props.cargarTareasFase();
                }
            }
        );
    }

    render() {
        const {
            cabecera,
            error_columnas,
            archivo
        } = this.state;
        return (
            <div>
                <ReactFileReader
                    handleFiles={files => {
                        this.inputFileChanged(files);
                    }} fileTypes='.csv'>
                    <Fragment>
                        <Button color='primary' ref="input_reader">Archivo de Cargue</Button>
                        {
                            archivo &&
                            <div style={{fontSize: '0.8rem'}}>
                                <strong>Nombre Archivo: </strong>{archivo.name}<br/>
                                <strong>Tamaño: </strong>{archivo.size / 1000} kb
                            </div>
                        }
                    </Fragment>
                </ReactFileReader>
                {
                    error_columnas &&
                    <Fragment>
                        <span>Se ha presentado problemas con el archivo, las columnas no coinciden con el formato:</span><br/>
                        {cabecera.map(e => <span key={e}>| {e} </span>)}
                    </Fragment>
                }
            </div>
        )
    }
}

export default CargueTareas;