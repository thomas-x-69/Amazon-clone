import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom" 
import { StateProvider } from "./StateProvider.jsx";
import reducer,{ initialState } from './reducer.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
  <BrowserRouter> 
      <App />
   </BrowserRouter> 
    </StateProvider>
  </React.StrictMode>,
)
