import React,{createContext,useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./ReduxToolkit/store";
//import Appp from './Appp';
//import {StateProvider} from './useContext/useContext';
//import Reducer,{initialState} from './useContext/reducer'



ReactDOM.render(
	<Provider store={store}>
    <App/>
    </Provider>,
    
  document.getElementById('root')
);

