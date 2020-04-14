import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // Price in cents
    const publishableKey = "pk_test_UafJkZMhLOIaIsBNNKiRdts800xh1GS1ac";

    const onToken = token => {
        console.log(token);
        alert("Payment successful.");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            panelLabel="Pay Now"
            name="Crown Clothing Ltd."
            description={`Your total is $${price}`}
            image="https://svgshare.com/i/CUz.svg"
            billingAddress
            shippingAddress
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
