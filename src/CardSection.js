import React, { Component } from "react";
import { CardElement } from "react-stripe-elements";

class CardSection extends Component {
  render() {
    return (
      <div>
        <form>
          Card details
          <CardElement />
        </form>
      </div>
    );
  }
}

export default CardSection;
