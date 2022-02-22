import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            {/* <App/> */}
            <Route path='/' element = {<App/>}/>
            <Route path='/LogIn' element = {<LogIn/>}/>
            <Route path='/SignUp' element = {<SignUp/>}/>
            <Route path='/Home' element = {<Home/>}/>
            <Route path='/Product' element = {<Product/>}/>
            <Route path='/Favorite' element = {<Favorite/>}/>
            <Route path='/Cart' element = {<Cart/>}/>
            <Route path='/CheckOut' element = {<CheckOut/>}/>
        </Routes>
    </BrowserRouter>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
