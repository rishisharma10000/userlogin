import React, { Component } from "react";
import { injectStripe } from "react-stripe-elements";
import CardSection from "./CardSection";
import { db } from "./firebase";

//import AddressSection from "./AddressSection";

class CheckoutForm extends Component {
  state = {
    token: null
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CardSection />
          <button>Register Card</button>
        </form>
        <button onClick={this.handlePay}>Pay for button</button>
      </div>
    );
  }

  handlePay = event => {
    db.collection("payments").add({
      userId: this.props.user,
      imageId: this.props.id,
      amount: 100,
      source: "tok_visa"
    });
  };

  handleSubmit = event => {
    console.log(this.props.stripe);
    event.preventDefault();
    this.props.stripe
      .createToken({
        type: "card",
        name: "Test Person"
      })
      .then(({ token: { id } }) => {
        console.log(
          "Received Stripe token:",
          id,
          this.props.id,
          "user:",
          this.props.user
        );
        db.collection("users")
          .doc(this.props.user)
          .set(
            {
              stripe: {
                cardToken: id
              }
            },
            { merge: true }
          );
      });
  };
}

export default injectStripe(CheckoutForm);
