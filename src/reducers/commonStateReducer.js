import constants from '../constants/constants'

export default function commonStateReducer(state = null, action) {
    
    switch (action.type) {
       
        case constants.SHOW_ADD_USER_FORM: {
          
			state['showForm'] = !action.data;

            return {...state};
        }
        case constants.SHOW_TOGGLE_VISIBLE_BLOCK: {
            // console.log('action.data reducer', action.data);
			state['showSetToggleBlock'] = !action.data;

            return {...state};
        }
        default:
            return state 
    }
}