import React from 'react';
import './index.css';
import App from './App';
import { AppProvider } from './context';


export default function Finall() {
  return (
      <AppProvider>
        <App />
      </AppProvider>
  );
}
  