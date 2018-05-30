import React, { Component } from "react";
import { auth, googleAuthProvider, facebookAuthProvider } from "./firebase";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithRedirect(googleAuthProvider)}>
          Sign in with G👀gle
        </button>
        <button onClick={() => auth.signInWithRedirect(facebookAuthProvider)}>
          Sign in with ⓕacebook
        </button>
      </div>
    );
  }
}

export default SignIn;
