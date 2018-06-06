import React, { Component } from "react";

import "./StripeCSS.css";
import PaypalExpressBtn from "react-paypal-express-checkout";

class StripeForm extends Component {
  render() {
    const client = {
      sandbox: "YOUR-SANDBOX-APP-ID",
      production: "YOUR-PRODUCTION-APP-ID"
    };
    return (
      <div>
        <PaypalExpressBtn client={client} currency={"USD"} total={1.0} />
      </div>
    );
  }
  handleSubmit = event => {
    console.log(event.target);
  };
}

export default StripeForm;
