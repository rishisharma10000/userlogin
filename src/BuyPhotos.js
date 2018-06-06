import React, { Component } from "react";
import { db } from "./firebase";
import Gallery from "react-photo-gallery";
import Payment from "./Payment";

class BuyPhotos extends Component {
  state = {
    images: [],
    selectedImage: null
  };
  componentDidMount() {
    db.collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(user => {
        this.setState({
          images: user.data().matchedImages.watermarked
        });
      });
  }
  render() {
    const { images } = this.state;
    const photoSet = [];
    images.map(image => {
      photoSet.push({
        src: image.path,
        width: 3,
        height: 3,
        id: image.imageId
      });
    });
    console.log(photoSet);
    return (
      <div>
        <Gallery photos={photoSet} onClick={this.handleClick} />
        {this.state.selectedImage && (
          <Payment selectedImage={this.state.selectedImage} />
        )}
      </div>
    );
  }
  handleClick = event => {
    this.setState({
      selectedImage: event.target.src
    });
  };
}

export default BuyPhotos;
