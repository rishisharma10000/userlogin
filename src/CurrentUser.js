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

  render() {
    return (
      <div className="CurrentUser">
        {/* <img
          className="CurrentUser-image"
          src={user.photoURL}
          alt={user.displayName}
        /> */}
        <div className="CurrentUser-id">
          {!this.state.newUser ? (
            <div>
              <img src={this.props.user.profileURL} id="image" />
              <h3>{this.props.user.displayName}</h3>
              <h4>{this.props.user.uid}</h4>
              <p>{this.props.user.email}</p>
            </div>
          ) : (
            <div>
              <img src={this.state.newUser.profilePic} id="image" />

              <h3>{this.props.user.displayName}</h3>
              <h4>{this.props.user.uid}</h4>
              <p>{this.props.user.email}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CurrentUser;
