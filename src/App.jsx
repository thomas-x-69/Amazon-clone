
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Orders from './components/orders/Orders'
import Login from './components/login/Login'
import Checkout from './components/checkout/Checkout'
import Payment from './components/payment/Payment'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Ntb8uEXObn5O4gAr8CWhXhvfzx7GBLm1EEiQZ6nnNTKKrVamrycKOs8eahjSq1ETFY5rtIqVCXfmfyoBHGE1XUm00MqQFbZA7"
);

function App() {
  const[{},dispatch]=useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
      }
    });
  }, []);

  
  const Pays = () => {  
    return(
      <Elements stripe={promise}>
          <Payment />      
            </Elements>          
    )
  }
  return (
    <div className="app">
    <Routes>
          <Route path="/" element={<Home />} />           
          <Route path="/orders" element={<Orders />} />           
          <Route path="/login" element={<Login />} />           
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/payment" element={<Pays />} />           
  </Routes>
    </div>
  )
}
export default App
