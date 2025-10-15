import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import "./OrdersPage.css";


import { OrdersHeader } from "./OrdersHeader";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrderData=async ()=>{
      const response=await axios.get("/api/orders?expand=products")
      setOrders(response.data) 
    }
    fetchOrderData()
  }, []);
  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <OrdersHeader order={order} />
                <OrdersGrid order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
