import React from 'react';
import imageA from '../image/Q3_JACKETS_imageC_300x600.jpg'
import whiteLogo from '../image/logo white.png'
import styles from '../styles/300x600.css';

import { connect } from 'react-redux';

var image, logo, copyContainer, copy, shipping, ctaText, ctaContainer, wrapper, position, blur, colour, copySpan;

class Banner300x600 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: null,
      image: null,
      copyTextColour: "",
      ctaColour: "",
      shippingTextColour: "",
      copyPosition: "left bottom"
    }

    this.onCopyPositionChange = this.onCopyPositionChange.bind(this)
    this.positionCopy = this.positionCopy.bind(this)
    this.onCTAColourChange=this.onCTAColourChange.bind(this)

  }

  componentDidMount() {
    logo = document.querySelector("#logo300x600");
    image = document.querySelector("#image300x600");
    copyContainer = document.querySelector("#copyContainer300x600");
    ctaContainer = document.querySelector("#ctaContainer300x600");
    ctaText =  document.querySelector("#ctaContainer300x600 p");
    wrapper = document.querySelector("#wrapper300x600");
    shipping = document.querySelector("#shipping300x600")
    blur = document.querySelector("#blur300x600");
    this.positionCopy(this.state.copyPosition);
  }

  onCopyPositionChange(event) {
    this.setState({ copyPosition: event.target.value })
    this.positionCopy(event.target.value)
  }

  onCTAColourChange(event) {
    this.setState({ ctaColour: event.target.value })
    ctaContainer.style.borderColor=event.target.value;
    ctaText.style.color=event.target.value;
  }

  positionCopy(position) {
    wrapper.style.left=null;
    copyContainer.style.textAlign=null;
    copyContainer.style.left=null;
    logo.style.left=null;
    ctaContainer.style.left=null;
    shipping.style.left=null;
    wrapper.style.right=null;
    copyContainer.style.textAlign=null;
    copyContainer.style.right=null;
    logo.style.right=null;
    ctaContainer.style.right=null
    shipping.style.right=null

    var split = position.split(" ");
    if(split[0]==="left"){
        wrapper.style.left="20px";
        copyContainer.style.textAlign="left";
        copyContainer.style.left="0";
        logo.style.left="20px";
        ctaContainer.style.left="20px";
        shipping.style.left="20px";
    } else if(split[0]==="right") {
        wrapper.style.right="20px";
        copyContainer.style.textAlign="right";
        copyContainer.style.right="0";
        logo.style.right="20px";
        ctaContainer.style.right="20px"
        shipping.style.right="20px"
    }

    if(split[1]==="top") {
      copyContainer.style.bottom=null;
      wrapper.style.top="47px";
    } else if(split[1]==="center") {
      copyContainer.style.bottom=null;
      wrapper.style.top="247px";
    } else {
      copyContainer.style.bottom="-518px";
    }
}

  renderCopy(copy) {
    var string = [];
    if (copy.length !==0) {
      var split = copy.split("~");
      for(var i = 1; i <= split.length; i++) {
        string.push(`<span id=copy${i}>${split[i-1]}</span><br>`)
      }
      copyContainer.innerHTML = string.join(" ")
    } else {
      return;
    }
  }

  renderCTA(ctaInput) {
    return ctaInput
  }

  setColour(prodColour) {
    copySpan = document.querySelectorAll("#copyContainer300x600 span"); // Wait until spans are created
    copySpan.forEach(function(span){
      span.style.backgroundColor=prodColour
    })
    // ctaContainer.style.borderColor=prodColour;
    // shipping.style.color=prodColour;
  }

  render() {
    return(
      <div>
        <div className={styles.main}>
          <img id="image300x600" className={styles.image} src={imageA} alt="productImage" ></img>
          <img id="logo300x600" className={styles.logo} src={whiteLogo} alt="logo"></img>
          <div id = "wrapper300x600" className={styles.wrapper} style={this.copyPosition}>
            <div id="copyContainer300x600" className={styles.copyContainer}>
              {this.renderCopy(this.props.copy)}
              {this.setColour(this.props.productColour)}
            </div>
          </div>
          <div id="ctaContainer300x600" className={styles.ctaContainer}>
            <p>{this.renderCTA(this.props.cta)}</p>
            <div id="blur300x600" className={styles.blur}></div>
          </div>
          <p id="shipping300x600" className={styles.shipping}>FREE SHIPPING AND RETURNS</p>
        </div>

        <form>
          <label>Copy Position</label>
          <input
            placeholder="Enter Copy Position"
            value={this.state.copyPosition}
            onChange={this.onCopyPositionChange}
            style={style}
          />
          <label>CTA Colour</label>
          <input
            placeholder="Enter CTA Colour"
            value={this.state.ctaColour}
            onChange={this.onCTAColourChange}
            style={style}
          />

        </form>
      </div>
    )
  }
}

const style = {
    width: "300px",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    margin: "10px"
  }

function mapStateToProps( state ) {
  return state;
}



export default connect(mapStateToProps)(Banner300x600);
