import React, { Component } from "react";
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
          <button onClick={this.handleClick}>Buy Now</button>
        </div>
        <div>{this.state.stripeForm && <StripeForm />}</div>
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
