import React, { Component } from "react";
import { storage, database, db } from "./firebase";
import ImageUploader from "react-images-upload";
import ViewPhotos from "./ViewPhotos";
import BuyPhotos from "./BuyPhotos";
import OwnedPhotos from "./OwnedPhotos";

class UploadPic extends Component {
  state = {
    view: false,
    buy: false,
    owned: false
  };
  render() {
    this.storageRef = storage.ref("/users").child(this.props.uid);
    const { view, buy, owned } = this.state;
    const { photoURL, displayName, email, matchedImages } = this.props.user;
    return (
      <div className="uploadPic">
        {
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.handleSubmit}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          />
        }
        <div>
          <button
            className="btn btn-outline-light btn-light"
            onClick={this.viewPhotos}
          >
            {!view ? "View Photos" : "Close Photos"}
          </button>
          {view && <ViewPhotos user={this.props.user} />}
        </div>
        <div>
          <button
            className="btn btn-outline-light btn-light"
            onClick={this.buyPhotos}
          >
            {!buy ? "View Purchaseable Photos" : "Close Photos"}
          </button>
          {buy && <BuyPhotos user={this.props.user} />}
        </div>
        <div>
          <button
            className="btn btn-outline-light btn-light"
            onClick={this.ownedPhotos}
          >
            {!owned ? "View Owned Photos" : "Close Photos"}
          </button>
          {owned && <OwnedPhotos user={this.props.user} />}
        </div>
      </div>
    );
  }
  ownedPhotos = () => {
    this.setState({
      owned: !this.state.owned
    });
  };

  viewPhotos = () => {
    this.setState({
      view: !this.state.view
    });
  };
  buyPhotos = () => {
    this.setState({
      buy: !this.state.buy
    });
  };

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

    // upload
    //   .then(onSnapshot => {
    //     return onSnapshot.ref.getDownloadURL();
    //   })
    //   .then(downloadURL => {
    //     db.collection("users")
    //       .doc(this.props.uid)
    //       .set({
    //         profilePic: downloadURL,
    //         displayName: displayName,
    //         email: email,
    //         matchedImages: []
    //       });
    //   });
  };
}

export default UploadPic;
