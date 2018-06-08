import React, { Component } from "react";
import { db } from "./firebase";
import Gallery from "react-photo-gallery";
import Payment from "./Payment";

class BuyPhotos extends Component {
  state = {
    images: [],
    selectedImage: null,
    selectedId: null,
    stripe: null
  };
  componentDidMount() {
    db.collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(user => {
        this.setState({
          images: user.data().matchedImages.watermarked,
          stripe: user.data().stripe
        });
      });
  }
  render() {
    const { images, stripe } = this.state;
    const photoSet = [];
    images.map(image => {
      photoSet.push({
        src: image.path,
        width: 100,
        height: 100,
        id: image.imageId
      });
    });
    console.log(photoSet);
    return (
      <div>
        <Gallery
          photos={photoSet}
          onClick={this.handleClick}
          columns={1}
          margin={2}
        />
        {this.state.selectedImage && (
          <Payment
            selectedImage={this.state.selectedImage}
            id={this.state.selectedId}
            user={this.props.user.uid}
            stripe={stripe}
          />
        )}
      </div>
    );
  }
  handleClick = event => {
    this.setState({
      selectedImage: event.target.src,
      selectedId: event.target.id
    });
  };
}

export default BuyPhotos;
