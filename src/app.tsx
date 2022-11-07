import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import store from './state/store'
import Emodoro from './ui/Emodoro'
function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"))
  root.render(
    <Provider store={store}>
      <Emodoro/>
    </Provider>
  )
}

render();
