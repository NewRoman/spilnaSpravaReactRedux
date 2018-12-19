import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

  

export function configureStore() {
  const middlewares = [thunk];
  const initialState = {
    commonState: {
      showForm: false,
      showSetToggleBlock: false
    },
    columnsOfTable: {
      userName: {
          isVisible: true,
          alias: "User Name"
        },
      userSurname: {
        isVisible: true,
        alias: "User Surname"
      },
      userAge: {
        isVisible: true,
        alias: "Age"
      },
      jobPosition: {
        isVisible: true,
        alias: "Job Position"
      },
      userMale: {
        isVisible: true,
        alias: "User Male"
      }
    },
    listItems: [{
      userName: 'Roman',
      userSurname: 'Gorbunov',
      userAge: 33,
      jobPosition: 'Front end',
      userMale: 'MALE'
    }]
  };
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}

export default configureStore;