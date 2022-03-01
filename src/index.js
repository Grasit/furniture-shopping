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
import Congrats from './pages/Congrats';
import Notifs from './pages/Notifs';
import Review from './pages/Review';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import MyReview from './pages/MyReview';
import AddShipping from './pages/AddShipping';
import AddPayment from './pages/AddPayment';
import Settings from './pages/Settings';


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
            <Route path='/Congrats' element = {<Congrats/>}/>
            <Route path='/Notifs' element = {<Notifs/>}/>
            <Route path='/Review' element = {<Review/>}/>
            <Route path='/Profile' element = {<Profile/>}/>
            <Route path='/Order' element = {<Order/>}/>
            <Route path='/Shipping' element = {<Shipping/>}/>
            <Route path='/Payment' element = {<Payment/>}/>
            <Route path='/MyReview' element = {<MyReview/>}/>
            <Route path='/AddShipping' element = {<AddShipping/>}/>
            <Route path='/AddPayment' element = {<AddPayment/>}/>
            <Route path='/Settings' element = {<Settings/>}/>
        </Routes>
    </BrowserRouter>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
