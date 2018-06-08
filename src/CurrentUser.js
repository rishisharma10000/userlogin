import React, { Component } from "react";
import { auth, db } from "./firebase";
import "./CurrentUser.css";

class CurrentUser extends Component {
  state = {
    newUser: null
  };

  componentDidMount() {
    db.collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(user => {
        this.setState({
          newUser: user.data()
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState.newUser !== this.state.newUser) {
      db.collection("users")
        .doc(this.props.user.uid)
        .get()
        .then(user => {
          this.setState({
            newUser: user.data()
          });
        });
    }
  }

  render() {
    return (
      <div className="CurrentUser">
        {!this.state.newUser ? (
          <div>
            {/* //<img src={this.props.user.photoURL} id="CurrentUser-image" /> */}
            <h3>{this.props.user.displayName}</h3>

            <p>{this.props.user.email}</p>
          </div>
        ) : (
          <div>
            <img src={this.state.newUser.profilePic} id="CurrentUser-image" />

            <h3>{this.props.user.displayName}</h3>

            <p>{this.props.user.email}</p>
          </div>
        )}
      </div>
    );
  }
}

export default CurrentUser;
