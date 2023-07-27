import React from 'react';
import './index.css';
import App from './App';
import { AppProvider } from './context';

export default function Final() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
};
