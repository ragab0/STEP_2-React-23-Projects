import React from 'react';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Final() {
  return (
      <AppProvider>
        <Router>  {/** Allah 3lek */}
          <App />
        </Router>
      </AppProvider>
  )
}
