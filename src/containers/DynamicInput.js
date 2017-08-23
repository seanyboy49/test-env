import React from 'react';
import _ from 'lodash';
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
        <form style={style.form}>
          <div style={style.inputGroup}>
            <label style={style.label} >Copy</label>
            <input
              placeholder="Enter Copy"
              value={this.state.copy}
              onChange={this.onCopyInputChange}
              style={style.generic}
            />
          </div>

          <div style={style.inputGroup}>
            <label style={style.label} >CTA</label>
            <input
              placeholder="Enter CTA"
              value={this.state.cta}
              onChange={this.onCTAInputChange}
              style={style.generic}
            />
          </div>
          <div style={style.inputGroup}>
            <label style={style.label} >Product Colour</label>
            <input
              placeholder="Enter Product Colour"
              value={this.state.productColour}
              onChange={this.onColourChange}
              style={style.generic}
            />
          </div>
        </form>
      </div>
    )
  }
}

const style = {
  generic: {
    width: "300px",
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "20px",
    margin: "10px",
    display: "block"
  },
  label: {
    display: "block",
    position: "relative",
    left: "10px",
    fontSize: "16px",
    color: "white"
  },
  inputGroup: {
    display: "inline-block",
    margin: "10px"
  },
  form: {
    backgroundColor: "#3498db",
    margin: "10px",
    borderRadius: "5px"
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators( { updateCopy, updateCTA, updateProductColour }, dispatch)
}



export default connect(null, mapDispatchToProps)(DynamicInput)
