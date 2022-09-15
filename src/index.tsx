import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { LocalCofeeTank } from './infrastructure/local_coffee_tank';
import { Provider } from 'react-redux';
import { Application } from './presentation/application';
import { store } from './application/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const coffeeTank = new LocalCofeeTank(5)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
