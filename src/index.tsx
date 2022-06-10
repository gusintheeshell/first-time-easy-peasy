import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from 'easy-peasy';
import App from './App';

import store from "./store/store"

type Props = StoreProvider["props"] & {children: React.ReactNode}

const StoreProviderCasted = StoreProvider as unknown as React.ComponentType<Props>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProviderCasted store={store}>
    <App />
  </StoreProviderCasted>
);

