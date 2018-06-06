import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import { render } from "react-dom";
import { StripeProvider } from "react-stripe-elements";
import StripeForm from "./StripeForm";

ReactDOM.render(<App />, document.getElementById("root"));
