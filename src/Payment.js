import React, { Component } from "react";

import { render } from "react-dom";
import { StripeProvider } from "react-stripe-elements";
import StripeForm from "./StripeForm";

class Payment extends Component {
  state = {
    stripeForm: false
  };
  render() {
    console.log(this.props.selectedImage);
    return (
      <div>
        <div>
          <img src={this.props.selectedImage} height="400" width="400" />
        </div>
        <div>
          <button
            className="btn btn-outline-light btn-light"
            onClick={this.handleClick}
          >
            Buy Now
          </button>
        </div>
        <div>
          {this.state.stripeForm && (
            <StripeProvider apiKey="pk_test_QYucUddzlm1cyC0dSvBiepAP">
              <StripeForm
                image={this.props.selectedImage}
                id={this.props.id}
                user={this.props.user}
                stripe={this.props.stripe}
              />
            </StripeProvider>
          )}
        </div>
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      stripeForm: !this.state.stripeForm
    });
  };
}

export default Payment;
