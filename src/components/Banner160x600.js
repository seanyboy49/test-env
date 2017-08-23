import React from 'react';
import imageA from '../image/Q3_JACKETS_imageC_160x600.jpg'
import whiteLogo from '../image/logo white.png'
import styles from '../styles/160x600.css';

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
        <div style={style.main}>
          <img id="image" src={imageA} alt="productImage" style={style.image}></img>
          <img id="logo" src={whiteLogo} alt="logo" style={style.logo}></img>
          <div id="wrapper" style={style.wrapper}>
            <div id="copy-container" style={style.copyContainer}></div>
          </div>
          <div id="cta-container" style={style.ctaContainer}>
            <p style={style.ctaContainerP}>SHOP CROPS</p>
            <div id="blur" style={style.blur}></div>
          </div>
          <p id="shipping" style={style.shipping}>FREE SHIPPING AND RETURNS</p>
                  </div>

      </div>
    )
  }
}


export default Banner160x600;
