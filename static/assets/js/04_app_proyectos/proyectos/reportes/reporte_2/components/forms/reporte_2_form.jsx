import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import validate from './validate';
import {formValueSelector} from 'redux-form'
import {connect} from "react-redux";
import {MyDateTimePickerField, MyCheckboxSimple} from '../../../../../../00_utilities/components/ui/forms/fields';
import Button from '@material-ui/core/Button';
import moment from 'moment-timezone';

const selector = formValueSelector('proyectoReporteCostosForm');

class Form extends Component {
    render() {
        const {
            pristine,
            submitting,
            reset,
            handleSubmit,
            onSubmit,
            valores
        } = this.props;
        return (
            <form className='p-4' onSubmit={handleSubmit(v => {
                onSubmit({
                    ...v,
                    fecha_inicial: moment(v.fecha_inicial).format('YYYY-MM-DD'),
                    fecha_final: moment(v.fecha_final).format('YYYY-MM-DD')
                });
            })}>
                <div className="row">
                    <MyCheckboxSimple
                        name='todo'
                        nombre='Todo'
                        className="col-12 col-md-6 col-lg-4"
                        disabled={valores.lapso}
                    />
                    <MyCheckboxSimple
                        name='con_mo_saldo_inicial'
                        nombre='Con MO saldo inicial (Hasta Abril de 2018)'
                        className="col-12 col-md-6 col-lg-4"
                        disabled={valores.todo}
                    />
                    <MyCheckboxSimple
                        name='lapso'
                        nombre='Por Lapso'
                        className="col-12 col-md-6 col-lg-4"
                        disabled={valores.todo}
                    />
                    {
                        valores.lapso &&
                        <div className="col-12">
                            <div className="row">
                                <MyDateTimePickerField
                                    name='fecha_inicial'
                                    nombre='Fecha Inicial'
                                    className='col-12 col-md-6'
                                />
                                <MyDateTimePickerField
                                    name='fecha_final'
                                    nombre='Fecha Final'
                                    className='col-12 col-md-6'
                                />
                            </div>
                        </div>
                    }
                </div>
                <Button
                    color="primary"
                    variant="contained"
                    type='submit'
                    className='ml-3'
                    disabled={submitting || pristine}
                >
                    Generar
                </Button>

                <Button
                    color="secondary"
                    variant="contained"
                    onClick={reset}
                    className='ml-3'
                    disabled={submitting || pristine}
                >
                    Limpiar
                </Button>
            </form>
        )
    }
}

function mapPropsToState(state, ownProps) {
    return {
        valores: selector(state, 'id_proyecto', 'todo', 'lapso', 'fecha_inicial', 'fecha_final'),
    }
}

Form = reduxForm({
    form: "proyectoReporteCostosForm",
    validate,
    enableReinitialize: true
})(Form);

Form = (connect(mapPropsToState, null)(Form));

export default Form;