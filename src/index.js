// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';

import DataExtract from './components/DataExtract';

const store = Store();

const render = () => (
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <DataExtract />
      </div>
    </Provider>,
    document.getElementById('app')
  )
);

render();
