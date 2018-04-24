import {HORA_COLABORADOR_PROYECTO_INICIAL_TYPES as TYPES} from '../../00_types';
import {
    fetchList,
    updateObject,
    fetchObject,
    deleteObject,
    createObject,
    callApiMethodWithParameters, fetchListWithParameter
} from '../../00_general_fuctions'

const current_url_api = 'mano_obra_hoja_trabajo_horas_iniciales';
export const createHoraColaboradorProyectoInicial = (values, callback = null, callback_error = null) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.create, payload: response})
        };
        createObject(current_url_api, values, dispatches, callback, callback_error)
    }
};
export const deleteHoraColaboradorProyectoInicial = (id, callback = null, callback_error = null) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.delete, payload: id})
        };
        deleteObject(current_url_api, id, dispatches, callback, callback_error)
    }
};
export const fetchHorasColaboradoresProyectosIniciales = (callback = null, callback_error = null) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.fetch_all, payload: response})
        };
        fetchList(current_url_api, dispatches, callback, callback_error);
    }
};

export function fetchHorasColaboradoresProyectosInicialesxLiteral(literal_id, callback = null, callback_error = null) {
    return function (dispatch) {
        const FULL_URL = `${current_url_api}/horas_por_literal/?literal_id=${literal_id}`;
        const dispatches = (response) => {
            dispatch({type: TYPES.fetch_all, payload: response})
        };
        fetchListWithParameter(FULL_URL, dispatches, callback, callback_error);
    }
}

export const fetchHoraColaboradorProyectoInicial = (id, callback = null, callback_error = null) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.fetch, payload: response})
        };
        fetchObject(current_url_api, id, dispatches, callback, callback_error);
    }
};
export const clearHorasColaboradoresProyectosIniciales = () => {
    return (dispatch) => {
        dispatch({type: TYPES.clear});

    }
};
export const updateHoraColaboradorProyectoInicial = (id, values, callback = null, callback_error = null) => {
    return (dispatch) => {
        const dispatches = (response) => {
            dispatch({type: TYPES.update, payload: response})
        };
        updateObject(current_url_api, id, values, dispatches, callback, callback_error)
    }
};