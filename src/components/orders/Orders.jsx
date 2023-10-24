import React, { useState, useEffect } from 'react';
import './Orders.css'
import Order from '../order/Order'
import Header from '../header/Header'
import { useStateValue } from '../../StateProvider';
import { collection, getDocs } from "firebase/firestore";
 

import { db } from '../../firebase';

const Orders = () => {

  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  
useEffect(() => {
  const ordersRef = collection(db, 'customersData');

  ordersRef.onSnapshot((snapshot) => {
    setOrders(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  });
}, []);


  return (
    <>
    <Header />

    <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>

     </>
  )
}

export default Orders