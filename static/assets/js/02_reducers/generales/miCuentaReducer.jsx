import {
    USUARIO_TYPES as TYPES
} from '../../01_actions/00_types';

export default function (state = {}, action) {
    switch (action.type) {
        case TYPES.fetch_cuenta:
            return action.payload.data[0];
        default:
            return state;
    }
}