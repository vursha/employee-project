import React from 'react';
//import FormValidation from './FormValidation'
//import Header from './components/Header';
import Home from './components/Home';

import Card from './components/Card';
import Card1 from './components/Card1';
import SignUp from './components/Login';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {empReducer} from './context/Reducers'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
 
const store=createStore(empReducer)
function App() {
  return (
    <BrowserRouter>
     <Provider store= {store}>
    <Routes>
          
          <Route path='/' element={<SignUp/>}/>
          
          <Route path="/home" element={<Home/>} />
          
          <Route path='/card' element={<Card/>}/>
         <Route path='/card1' element={<Card1/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
    
  );
}

export default App;
