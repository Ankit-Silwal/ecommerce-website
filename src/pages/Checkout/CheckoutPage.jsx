import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import {CheckOutOrderSummary} from './CheckOutOrderSummary'
import { CheckoutPaymentSummary } from "./CheckoutPaymentSummary";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const fetchCheckoutData=async ()=>{
      let response=await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
        setDeliveryOptions(response.data);
        response=await axios.get("/api/payment-summary")
        setPaymentSummary(response.data)
  }
      fetchCheckoutData()
  }, []);
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <CheckOutOrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <CheckoutPaymentSummary cart={cart} deliveryOptions={deliveryOptions} paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  );
}
