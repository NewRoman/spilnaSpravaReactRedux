import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import listItemsReducer from './reducers/listItemsReducer';
import columnsOfTableReducer from './reducers/columnsOfTableReducer';
import commonStateReducer from './reducers/commonStateReducer';



export default function createReducer(extraReducerObjects = {
            listItems: listItemsReducer, 
            columnsOfTable: columnsOfTableReducer, 
            commonState: commonStateReducer
          }) 
{
  return combineReducers({
    form: formReducer,
    ...extraReducerObjects
  });
}