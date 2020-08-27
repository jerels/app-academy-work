import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { fetchGifs } from './util/apiUtil';
import configureStore from './store';
import { fetchGifsThunkActionCreator } from './actions/gifActions';

window.fetchGifs = fetchGifs;
window.fetchGifsThunkActionCreator = fetchGifsThunkActionCreator;
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
