import React, { Component } from "react";
import { db } from "./firebase";
import SlideShow from "react-image-show";

class Owned extends Component {
  state = {
    owned: []
  };

  componentDidMount() {
    db.collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(user => {
        this.setState({
          owned: user.data().matchedImages.purchased.map(image => {
            return image.path;
          })
        });
      });
  }
  render() {
    const { owned } = this.state;
    return (
      <div>
        <SlideShow
          images={owned}
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

export default Owned;
