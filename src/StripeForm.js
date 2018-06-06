import React, { Component } from "react";

import { Elements } from "react-stripe-elements";

import InjectedCheckoutForm from "./CheckoutForm";

class StripeForm extends Component {
  render() {
    return (
      <div>
        <Elements>
          <InjectedCheckoutForm
            image={this.props.image}
            id={this.props.id}
            user={this.props.user}
            stripe={this.props.stripe}
          />
        </Elements>
      </div>
    );
  }
}

export default StripeForm;
