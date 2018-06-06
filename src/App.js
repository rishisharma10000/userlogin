import React, { Component } from "react";
import { auth, database, db } from "./firebase";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
import UploadPic from "./UploadPic";
import pick from "lodash/pick";
import image from "./logo.png";
import "./App.css";

class App extends Component {
  state = {
    user: null,
    users: {},
    userData: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user });
      // if (user) {
      //   this.usersRef = db.collection("users");
      //   this.userRef = this.usersRef(user.uid);

      //   this.userRef.once("value").then(onSnapshot => {
      //     if (onSnapshot.val()) return;
      //     const userData = pick(user, ["displayName", "email"]);
      //     this.setState({ userData });
      //   });
      // }
    });
  }
  render() {
    this.usersRef;
    this.userRef;
    const { user, userData } = this.state;
    return (
      <div className={user ? "App " : "App homepage-login"}>
        <img className="logo" src={image} />

        {!user && <SignIn />}

        {user && (
          <div>
            <div>
              <CurrentUser user={user} />
            </div>
            <div className="uploadedPic">
              <UploadPic user={user} uid={user.uid} />
            </div>
            <div>
              <button
                className="btn btn-outline-light btn-light"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
