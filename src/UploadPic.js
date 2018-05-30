import React, { Component } from "react";
import { storage, database, db } from "./firebase";
import ImageUploader from "react-images-upload";

class UploadPic extends Component {
  render() {
    this.storageRef = storage.ref("/user-images").child(this.props.uid);

    const { photoURL, displayName, email } = this.props.user;
    return (
      <div>
        <img src={photoURL} />
        <h3>{displayName}</h3>
        {
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.handleSubmit}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          />
        }
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
      uid: uid
    };
    const upload = this.storageRef.child(file.name).put(file, metaData);

    upload
      .then(onSnapshot => {
        return onSnapshot.ref.getDownloadURL();
      })
      .then(downloadURL => {
        db
          .collection("users")
          .doc(this.props.uid)
          .set({
            profilePic: downloadURL,
            displayName: displayName,
            email: email,
            matchedImages: []
          });
      });
  };
}

export default UploadPic;
