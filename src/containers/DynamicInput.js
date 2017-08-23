import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateCopy, updateCTA, updateProductColour } from '../actions/index';


class DynamicInput extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      copy: "THE TRUTH~IS RARELY PURE,~AND NEVER SIMPLE",
      cta: "SHOP JACKETS",
      productColour: "white"
    }

    this.onCopyInputChange = this.onCopyInputChange.bind(this);
    this.onCTAInputChange = this.onCTAInputChange.bind(this);
    this.onColourChange = this.onColourChange.bind(this);
  }

  componentDidMount() {
    this.props.updateCopy(this.state.copy)
    this.props.updateCTA(this.state.cta)
  }

  onCopyInputChange(event) {
    this.setState({ copy: event.target.value })
    this.props.updateCopy(this.state.copy)
  }

  onCTAInputChange(event) {
    this.setState({ cta: event.target.value })
    this.props.updateCTA(this.state.cta)
  }

  onColourChange(event) {
    this.setState({ productColour: event.target.value })
    this.props.updateProductColour(this.state.productColour)
  }

  render() {
    return(
      <div>
        <form>
          <label>Copy</label>
          <input
            placeholder="Enter Copy"
            value={this.state.copy}
            onChange={this.onCopyInputChange}
            style={style.copyInput}
          />
          <label>CTA</label>
          <input
            placeholder="Enter CTA"
            value={this.state.cta}
            onChange={this.onCTAInputChange}
            style={style.ctaInput}
          />
          <label>Product Colour</label>
          <input
            placeholder="Enter Product Colour"
            value={this.state.productColour}
            onChange={this.onColourChange}
            style={style.copyInput}
          />



        </form>
      </div>
    )
  }
}

const style = {
  copyInput: {
    width: "300px",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    margin: "10px"
  },
  ctaInput: {
    width: "300px",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    margin: "10px"
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { updateCopy, updateCTA, updateProductColour }, dispatch)
}



export default connect(null, mapDispatchToProps)(DynamicInput)
