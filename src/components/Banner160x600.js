import React from 'react';
import imageA from '../image/Q3_JACKETS_imageC_160x600.jpg'
import whiteLogo from '../image/logo white.png'
import '../styles/160x600.css';

console.log(imageA)

class Banner160x600 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: null,
      image: null,
      copy: null,
      copyTextColour: null,
      cta: null,
      productColour: null,
      shippingTextColour: null
    }
  }

  render() {
    return(
      <div>
        <div className="main">
          <img id="image" src={imageA} alt="productImage" ></img>
          <img id="logo" src={whiteLogo} alt="logo"></img>
          <div id="wrapper">
            <div id="copy-container"></div>
          </div>
          <div id="cta-container">
            <p>SHOP CROPS</p>
            <div id="blur"></div>
          </div>
          <p id="shipping">FREE SHIPPING AND RETURNS</p>
        </div>

      </div>
    )
  }
}


export default Banner160x600;
