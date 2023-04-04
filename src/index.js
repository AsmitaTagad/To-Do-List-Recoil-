import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {RecoilRoot} from 'recoil'
import App from './App';
import MyList from './MyList'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <RecoilRoot>
   <Routes>
   <Route path="/" element={<App/>}/>
   <Route path='/MyList' element={<MyList/>}/>
   </Routes>
  </RecoilRoot>
  </Router>
);
