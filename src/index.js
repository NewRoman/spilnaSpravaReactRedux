import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import ItemsListContainer from './containers/ItemsListContainer';
import ActionsBtnsContainer from './containers/ActionsBtnsContainer';
import FormContainer from './containers/FormContainer';
import ToggleVisibleBlockContainer from './containers/ToggleVisibleBlockContainer';

import './scss/App.scss'; 
 
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
    <ToggleVisibleBlockContainer />
    <ActionsBtnsContainer />
    <ItemsListContainer />
  </Provider>,
  document.getElementById('root')
);