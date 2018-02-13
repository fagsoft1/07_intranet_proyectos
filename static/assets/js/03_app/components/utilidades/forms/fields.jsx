import React from 'react';
import {upper, lower} from "../common";
import {Field} from 'redux-form';
import PropTypes from "prop-types";
import {
    TextField,
    Checkbox
} from 'redux-form-material-ui'
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import momentLocaliser from 'react-widgets-moment';
import moment from 'moment-timezone';

moment.tz.setDefault("America/Bogota");
momentLocaliser(moment);

export const MyTextFieldSimple = (props) => {
    let normalize = null;
    if (props.case === 'U') {
        normalize = upper
    } else if (props.case === 'L') {
        normalize = lower
    }
    return (
        <div className={props.className}>
            <Field
                fullWidth={true}
                name={props.name}
                component={TextField}
                hintText={props.nombre}
                autoComplete="off"
                floatingLabelText={props.nombre}
                normalize={normalize}
            />
        </div>
    )
};
MyTextFieldSimple.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    nombre: PropTypes.string
};


export const MyCheckboxSimple = (props) => {
    let normalize = null;
    if (props.case === 'U') {
        normalize = upper
    } else if (props.case === 'L') {
        normalize = lower
    }
    return (
        <div className={props.className}>
            <Field
                name={props.name}
                component={Checkbox}
                label={props.nombre}
                normalize={v => !!v}
            />
        </div>
    )
};
MyCheckboxSimple.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    nombre: PropTypes.string
};

const renderDateTimePicker = ({input: {onChange, value}, showTime}) => {
    const now = moment();
    return (
        <div>
            <DateTimePicker
                onChange={onChange}
                format="YYYY-MM-DD"
                time={false}
                max={new Date()}
                value={!value ? null : new Date(value)}
            />
        </div>
    )
};

export const MyDateTimePickerField = (props) => {
    return (
        <div className={props.className}>
            <label>{props.nombre}</label>
            <Field
                name={props.name}
                type="date"
                fullWidth={true}
                label={props.nombre}
                component={renderDateTimePicker}
            />
        </div>
    )
};

MyDateTimePickerField.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    nombre: PropTypes.string
};

// const MySelectFieldItem = (props) => {
//     const {
//         item
//     } = props;
//     return (
//         <MenuItem key={item.id} value={item.id}
//                   primaryText={`${item.id_literal} - ${item.descripcion}`}/>
//     )
// };
//
// export const MySelectFieldSimple = (props) => {
//     let normalize = null;
//     if (props.case === 'U') {
//         normalize = upper
//     } else if (props.case === 'L') {
//         normalize = lower
//     }
//     return (
//         <div className={props.className}  >
//             <Field
//                 fullWidth={true}
//                 name="literal"
//                 component={SelectField}
//                 hintText="Literal Op"
//                 floatingLabelText="Literal Op"
//             >
//                 {
//                     _.map(_.sortBy(literales_lista, ['id_literal']), (literal) => {
//                         return <MySelectFieldItem item={item}/>
//                     })
//                 }
//             </Field>
//         </div>
//     )
// };