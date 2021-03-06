const validate = values => {
    const errors = {};

    const requiredFields = [
        'nombre',
        'nomenclatura',
    ];
    requiredFields.map(field => {
        if (!values[field]) {
            errors[field] = 'Requerido'
        }
    });
    if (values['nomenclatura'] && values['nomenclatura'].length > 4) {
        errors['nomenclatura'] = 'Debe de tener menos de 4 caracteres'
    }
    return errors;
};

export default validate;