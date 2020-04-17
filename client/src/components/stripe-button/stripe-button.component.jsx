import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // Price in cents
    const publishableKey = "pk_test_UafJkZMhLOIaIsBNNKiRdts800xh1GS1ac";

    const onToken = (token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then(() => {
                alert("Payment successful.");
            })
            .catch((error) => {
                console.log("Payment error: ", JSON.parse(error));
                alert(
                    "There was an issue with your payment. Please make sure you use the provided test card"
                );
            });
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
