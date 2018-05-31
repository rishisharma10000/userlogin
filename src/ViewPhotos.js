import React, { Component } from "react";
import SlideShow from "react-image-show";
import { db } from "./firebase";

class ViewPhotos extends Component {
  state = {
    images: []
  };
  componentDidMount() {
    db
      .collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(user => {
        this.setState({
          images: user.data().matchedImages
        });
      });
  }
  render() {
    const { images } = this.state;
    // const { photoURL } = this.props.user;
    // arr.push(photoURL);
    return (
      <div>
        {console.log(images)}
        <SlideShow
          images={images}
          width="920px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators
          thumbnails
          fixedImagesHeight
        />
      </div>
    );
  }
}

export default ViewPhotos;
