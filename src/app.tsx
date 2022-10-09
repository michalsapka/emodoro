import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import store from './store'
import Timer from './timer'

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"))

  root.render(
    <Provider store={store}>
      <Timer/>
    </Provider>
  )
}

render();
