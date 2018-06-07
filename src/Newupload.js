import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import { storage } from "./firebase";

class Newupload extends Component {
  render() {
    this.storageRef = storage.ref("/users").child(this.props.uid);
    return (
      <div>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.handleSubmit}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        />
      </div>
    );
  }
  handleSubmit = event => {
    const { photoURL, displayName, email } = this.props.user;
    const { uid } = this.props.uid;

    const array = [];
    console.log(event[0].name);
    const file = event[0];

    const metaData = {
      uid: this.props.uid
    };
    file.uid = this.props.uid;
    file.collection = "users";
    console.log(file);
    const upload = this.storageRef.child(file.name).put(file);
  };
}

export default Newupload;
