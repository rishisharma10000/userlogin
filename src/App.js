import React, { Component } from "react";

import { auth, database, db } from "./firebase";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
import UploadPic from "./UploadPic";
import pick from "lodash/pick";

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
      if (user) {
        this.usersRef = db.collection("users");
        this.userRef = this.usersRef(user.uid);

        this.userRef.once("value").then(onSnapshot => {
          if (onSnapshot.val()) return;
          const userData = pick(user, ["displayName", "email"]);
          this.setState({ userData });
        });
      }
    });
  }
  render() {
    this.usersRef;
    this.userRef;
    const { user, userData } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to PicLink</h2>
        </div>

        {!user && <SignIn />}
        {user && (
          <div>
            <div>
              <UploadPic user={user} uid={user.uid} />
            </div>
            <CurrentUser user={user} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
