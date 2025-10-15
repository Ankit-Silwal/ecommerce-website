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
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });
    axios
      .get("/api/payment-summary")
      .then((response) => setPaymentSummary(response.data));
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
