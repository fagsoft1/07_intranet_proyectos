import {ARCHIVO_LITERAL_TYPES as TYPES} from '../../00_types';
import {
    fetchListGet,
    updateObject,
    fetchObject,
    deleteObject,
    createObject,
    fetchListWithParameterOld
} from '../../00_general_fuctions'

const current_url_api = 'literales_archivos';
export const createArchivoLiteral = (values, options_action = {}) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.create, payload: response})
        };
        const options = {dispatches, ...options_action, dispatch_method: dispatch};
        createObject(current_url_api, values, options);
    }
};
export const deleteArchivoLiteral = (id, options_action = {}) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.delete, payload: id})
        };
        const options = {dispatches, ...options_action, dispatch_method: dispatch};
        deleteObject(current_url_api, id, options);
    }
};
export const fetchArchivosLiterales = (options_action = {}) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.fetch_all, payload: response})
        };
        const {limpiar_coleccion = true} = options_action;
        const options = {
            dispatches,
            ...options_action,
            dispatch_method: dispatch,
            clear_action_type: limpiar_coleccion ? TYPES.clear : null
        };
        fetchListGet(current_url_api, options);
    }
};

export const fetchArchivosLiterales_x_literal = (literal_id, callback = null, callback_error = null) => {
    return (dispatch) => {
        const url = `${current_url_api}/listar_x_literal/?literal_id=${literal_id}`;
        const dispatches = (response) => {
            dispatch({type: TYPES.fetch_all, payload: response})
        };
        fetchListWithParameterOld(url, dispatches, callback, callback_error);
    }
};

export const fetchArchivoLiteral = (id, options_action = {}) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.fetch, payload: response})
        };
        const options = {dispatches, ...options_action, dispatch_method: dispatch};
        fetchObject(current_url_api, id, options);
    }
};

export const clearArchivosLiterales = () => {
    return (dispatch) => {
        dispatch({type: TYPES.clear});

    }
};
export const updateArchivoLiteral = (id, values, options_action = {}) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.update, payload: response})
        };
        const options = {dispatches, ...options_action, dispatch_method: dispatch};
        updateObject(current_url_api, id, values, options);
    }
};