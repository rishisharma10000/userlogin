import React, { Component } from "react";
import { CardElement } from "react-stripe-elements";

class CardSection extends Component {
  render() {
    return (
      <div>
        <form>
          Enter your card details :
          <div style={{ width: "350px", margin: "0 auto" }}>
            <CardElement />
          </div>
        </form>
      </div>
    );
  }
}

export default CardSection;
