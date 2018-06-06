import React, { Component } from "react";
import { auth, googleAuthProvider, facebookAuthProvider } from "./firebase";
import "./signin.css";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <div>
          <button
            className="btn btn-outline-light btn-light"
            onClick={() => auth.signInWithRedirect(googleAuthProvider)}
          >
            Sign in with Google
          </button>
        </div>
        <div>
          <button
            className="btn btn-outline-light btn-light"
            onClick={() => auth.signInWithRedirect(facebookAuthProvider)}
          >
            Sign in with Facebook
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
