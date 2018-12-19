import constants from '../constants/constants'

export default function columnsOfTableReducer(state = null, action) {
    switch (action.type) {
        
        case constants.TOGGLE_COLUMN_VISIBILITY: {
            state[action.data].isVisible = !state[action.data].isVisible;

            return {...state};
        }
        default:
            return state 
    }
}