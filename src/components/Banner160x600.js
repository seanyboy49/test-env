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
        <div className={styles.main}>
          <img id={styles.image} src={imageA} alt="productImage" ></img>
          <img id={styles.logo} src={whiteLogo} alt="logo"></img>
          <div id={styles.wrapper}>
            <div id={styles.copyContainer}></div>
          </div>
          <div id={styles.ctaContainer}>
            <p>SHOP CROPS</p>
            <div id={styles.blur}></div>
          </div>
          <p id={styles.shipping}>FREE SHIPPING AND RETURNS</p>
        </div>

      </div>
    )
  }
}


export default Banner160x600;
