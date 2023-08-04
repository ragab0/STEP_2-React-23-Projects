import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from "@reach/router"
import { appsAPI } from './assets/data/appsAPI';


// import Final from './train/1useReducer';
// import Final from './train/2useReducer';
const Page = lazy(() => import("./page"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Page path="/" apps={appsAPI[0]} appsAdvanced={appsAPI[1]} />
          {
            appsAPI.map((apps, i) => (
              apps.map(({link, Comp}, i) => (
                  <Comp path={link} /> 
              ))
            ))
          }
    </Router>
  </React.StrictMode>
);