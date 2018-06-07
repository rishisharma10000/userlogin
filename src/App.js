import React, { Component } from "react";
import { auth, database, db } from "./firebase";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
import ViewPics from "./ViewPics";
import pick from "lodash/pick";
import image from "./logo.png";
import Newupload from "./Newupload";

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
            <div class="user-upload">
              <div>
                <CurrentUser user={user} />
                <Newupload user={user} uid={user.uid} />
                <div>
                  <button
                    className="btn btn-outline-light btn-light"
                    onClick={() => auth.signOut()}
                  >
                    Sign Out
                  </button>
                </div>
              </div>

              <div
                className="uploadedPic"
                style={{
                  width: "80%",
                  margin: "0 1.5%"
                }}
              >
                <ViewPics user={user} uid={user.uid} />
              </div>
            </div>
            <div />
          </div>
        )}
      </div>
    );
  }
}

export default App;
