import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import Timer from './timer'

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"))

  root.render(<Timer/>)
}

render();
