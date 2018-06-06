import React, { Component } from "react";
import { auth, googleAuthProvider, facebookAuthProvider } from "./firebase";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithRedirect(googleAuthProvider)}>
          Sign in with Google
        </button>
        <button onClick={() => auth.signInWithRedirect(facebookAuthProvider)}>
          Sign in with Facebook
        </button>
      </div>
    );
  }
}

export default SignIn;
