import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store/store';
import { getQuestsList } from './store/quest-slice/api-action';
import { Provider } from 'react-redux';
import { checkStatusAutorization } from './store/user-slice/api-action';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(getQuestsList());
store.dispatch(checkStatusAutorization());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
