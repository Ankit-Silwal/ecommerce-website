import dayjs from "dayjs";
import { CheckoutCartItemDetails } from "./CheckoutCartItemDetails";
export function CheckOutOrderSummary({cart, deliveryOptions}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd ,MMMM D"
                )}
              </div>
              <CheckoutCartItemDetails cartItem={cartItem} deliveryOptions={deliveryOptions} />
            </div>
          );
        })}
    </div>
  );
}
