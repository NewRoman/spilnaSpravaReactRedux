import constants from './../constants/constants'

export default function listItemsReducer(state = null, action) {
    
    switch (action.type) {
       
        case constants.ADD_NEW_USER_INFO: {
            
            return [...state, action.data];
        }
        default:
            return state 
    }
}