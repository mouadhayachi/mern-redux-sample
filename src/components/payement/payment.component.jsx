import React from "react";
import StripeCheckout from "react-stripe-checkout";

function Payement() {
  const price = 200;
  const pulblishedKey =
    "pk_test_51HieNLBo5Jb34BwOwTzYMTxof3EpAuTtEDKkhGoWviSynAPZtBIZNNkZG9IMUo9tbySb2vYgGx3uj2e6IMxGlHv100ccKT8jkr";

  const onToKen = () => {
    alert("Payment Done with Success");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Mouadh Company Ltd"
        billingAddress
        shippingAddress
        description={`The Total is :${price}`}
        amout={price}
        panelLabel="Pay Now"
        token={onToKen}
        stripeKey={pulblishedKey}
        currency="EUR"
      />
    </div>
  );
}

export default Payement;
