import React, { Component } from "react";
import SlideShow from "react-image-show";
import { db } from "./firebase";
import Payment from "./Payment";

class ViewPhotos extends Component {
  state = {
    images: []
  };
  componentDidMount() {
    db.collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(user => {
        this.setState({
          images: user.data().matchedImages.watermarked.map(image => {
            return image.path;
          })
        });
      });
  }
  render() {
    const { images } = this.state;

    const { photoURL } = this.props.user;

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
