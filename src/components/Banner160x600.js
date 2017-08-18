import React from 'react';
import imageA from '../image/160x600.jpg'
import whiteLogo from '../image/logo white.png'

import '../styles/160x600.css';

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

const style = {
  main: {
    top: "200px",
    left: "200px",
    height: "600px",
    width: "160px",
    backgroundColor: "#ecf0f1",
    borderColor: "#ecf0f1",
    borderStyle: "solid",
    borderWidth: "1px",
    position: "relative"
  },
  image: {
    position: "absolute",
    width: "160px",
    height: "600px",
    left: 0,
    top: 0
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "26px",
    transform: "scale(0.9)",
    zIndex: "10"
  },
  wrapper: {
   boxSizing: "border-box",
   width: "100%",
   position: "absolute",
   left: "9px",
   height: "auto"
 },
 copyContainer: {
   "position":"absolute",
   "width":"auto",
   "textAlign":"left"
 },
 ctaContainer: {
   "border":"2px solid white",
   "display":"table",
   "textAlign":"center",
   "top":"540px",
   "position":"relative",
   "overflow":"hidden",
   "margin":"auto"
 },
 ctaContainerP: {
  "top": "2px",
  "color": "white",
  "position": "relative",
  "letterSpacing": "1px",
  "fontSize": "11px",
  "margin": "7px 11px",
  "fontFamily": "\"CalibreBold\"",
  "zIndex": "100"
},
blur: {
  "position": "absolute",
  "top": "0",
  "height": "100%",
  "width": "100%",
  "WebkitFilter": "blur(10px)",
  "filter": "blur(3px)"
},
shipping: {
  "left": "6px",
  "bottom": "7px",
  "position": "absolute",
  "fontFamily": "CalibreLight",
  "color": "white",
  "zIndex": "100",
  "letterSpacing": "2px",
  "fontSize": "8px"
}
}


export default Banner160x600;
