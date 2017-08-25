import React from 'react';
// import whiteLogo from '../image/logo white.png'
// import blackLogo from '../image/logo black.png'
import styles from '../styles/300x600.css';

// import cropsA from '../image/CROPS/Image A/Q3_CROPS_ImageA_300x600.jpg'
// import cropsB from '../image/CROPS/Image B/Q3_CROPS_ImageB_300x600.jpg'
// import cropsC from '../image/CROPS/Image C/Q3_CROPS_ImageC_300x600.jpg'
// import cropsD from '../image/CROPS/Image D/Q3_CROPS_ImageD_300x600.jpg'
//
// import pantsA from '../image/PANTS/Image A/Q3_PANTS_ImageA_300x600.jpg'
// import pantsB from '../image/PANTS/Image B/Q3_PANTS_ImageB_300x600.jpg'
// import pantsC from '../image/PANTS/Image C/Q3_PANTS_ImageC_300x600.jpg'
//
// import runA from '../image/RUN/Image A/Q3_RUN_ImageA_300x600.jpg'
// import runB from '../image/RUN/Image B/Q3_RUN_ImageB_300x600.jpg'
// import runC from '../image/RUN/Image C/Q3_RUN_ImageC_300x600.jpg'
// import runD from '../image/RUN/Image D/Q3_RUN_ImageD_300x600.jpg'

import { connect } from 'react-redux';

var logo, copyContainer, shipping, ctaText, ctaContainer, wrapper, copySpan, whiteLogo, blackLogo;

whiteLogo = "http://localhost:3001/images/logo%20white.png"
blackLogo = "http://localhost:3001/images/logo%20black.png"

class Banner300x600 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: whiteLogo,
      image: "http://localhost:3001/images/CROPS/Image%20A/Q3_CROPS_ImageA_300x600.jpg",
      copyTextColour: "",
      ctaColour: "",
      shippingColour: "",
      copyPosition: "left bottom"
    }

    this.onCopyPositionChange = this.onCopyPositionChange.bind(this);
    this.positionCopy = this.positionCopy.bind(this);
    this.onCTAColourChange=this.onCTAColourChange.bind(this);
    this.onShippingColourChange=this.onShippingColourChange.bind(this);
    this.onLogoChange=this.onLogoChange.bind(this);
  }

  componentDidMount() {
    logo = document.querySelector("#logo300x600");
    copyContainer = document.querySelector("#copyContainer300x600");
    // copy = document.querySelector("#copyContainer300x600 span");
    ctaContainer = document.querySelector("#ctaContainer300x600");
    ctaText =  document.querySelector("#ctaContainer300x600 p");
    wrapper = document.querySelector("#wrapper300x600");
    shipping = document.querySelector("#shipping300x600")
    this.positionCopy(this.state.copyPosition);
  }

  componentWillReceiveProps(nextProps) {
    let cat = nextProps.productCategory;
    let imgVar = nextProps.imageVariant;
    let url = `/images/${cat}/Image%20${imgVar}/Q3_${cat}_Image${imgVar}_300x600.jpg`

    fetch(url)
      .then(res => this.setState({image: res.url}))
    // let url = `http://localhost:3001/images/${cat}/Image%20${imgVar}/Q3_${cat}_Image${imgVar}_300x600.jpg`
    // this.setState({image: url})
  //   if(cat==="CROPS") {
  //      switch(imgVar) {
  //        case 'A':
  //        this.setState({ image: cropsA })
  //        break;
  //        case 'B':
  //        this.setState({ image: cropsB })
  //        break;
  //        case 'C':
  //        this.setState({ image: cropsC })
  //        break;
  //        case 'D':
  //        this.setState({ image: cropsD })
  //        break;
  //        default:
  //        this.setState({ image: cropsA})
  //      }
  //   } else if(cat==="PANTS") {
  //     switch(imgVar) {
  //       case 'A':
  //       this.setState({ image: pantsA })
  //       break;
  //       case 'B':
  //       this.setState({ image: pantsB })
  //       break;
  //       case 'C':
  //       this.setState({ image: pantsC })
  //       break;
  //       default:
  //       this.setState({ image: pantsA})
  //     }
  //   } else if (cat==="RUN")  {
  //     switch(imgVar) {
  //       case 'A':
  //       this.setState({ image: runA })
  //       break;
  //       case 'B':
  //       this.setState({ image: runB })
  //       break;
  //       case 'C':
  //       this.setState({ image: runC })
  //       break;
  //       case 'D':
  //       this.setState({ image: runD })
  //       break;
  //       default:
  //       this.setState({ image: runA})
  //     }
  //
  // }
}

  onLogoChange(event) {
    this.setState({ logo: event.target.value })
  }

  onShippingColourChange(event) {
    this.setState({ shippingColour: event.target.value })
    shipping.style.color=event.target.value;
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
    wrapper.style.top=null;


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
    } else if(split[1]==="bottom"){
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
  }

  render() {

    return(
      <div>
        <div className={styles.main}>
          <img id="image300x600" className={styles.image} src={this.state.image} alt="productImage" ></img>
          <img id="logo300x600" className={styles.logo} src={this.state.logo} alt="logo"></img>
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

        <form style={style.form}>
          <h1>300x600</h1>

          <label style={style.label}>Copy Position</label>
          <input
            placeholder="Enter Copy Position"
            value={this.state.copyPosition}
            onChange={this.onCopyPositionChange}
            style={style.generic}
          />

          <label style={style.label}>CTA Colour</label>
          <input
            placeholder="Enter CTA Colour"
            value={this.state.ctaColour}
            onChange={this.onCTAColourChange}
            style={style.generic}
          />
          <label style={style.label}>Shipping Text Colour</label>
          <input
            placeholder="Enter Shipipng Colour"
            value={this.state.shippingColour}
            onChange={this.onShippingColourChange}
            style={style.generic}
          />
          <label style={style.label}>Logo Colour</label>
          <div style={style.radioGroup}>
            <label>
              White
              <input
                type="radio"
                value={whiteLogo}
                checked={this.state.logo===whiteLogo}
                onChange={this.onLogoChange}
                style={style.radio}

              />
            </label>
            <label>
              Black
              <input
                type="radio"
                value={blackLogo}
                checked={this.state.logo===blackLogo}
                onChange={this.onLogoChange}
                style={style.radio}
              />
            </label>
          </div>

          </form>
      </div>
    )
  }
}

var style = {
  form: {
    position: "relative",
    display: "inline-block",
    top: "-200px"
  },
  generic:  {
    display: "block",
    width: "300px",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    margin: "10px"
  },
  radio: {
    padding: "20px",
    margin: "10px"
  },
  label: {
    display: "inline-block",
    position: "relative",
    left: "10px"
  },
  radioGroup: {
    position: "relative",
    top: "5px",
    left: "12px"
  }
}

function mapStateToProps( state ) {
  return state;
}



export default connect(mapStateToProps)(Banner300x600);
