import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/AppContainer';

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './Reducers'
import AppRouter from './Router/router'

const store = createStore(rootReducer)


const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)