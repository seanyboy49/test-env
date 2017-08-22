import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateCopy, updateCTA } from '../actions/index';


class DynamicInput extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      copy: "THE TRUTH~IS NEVER PURE,~AND RARELY SIMPLE",
      cta: ""
    }

    this.onCopyInputChange = this.onCopyInputChange.bind(this);
    this.onCTAInputChange = this.onCTAInputChange.bind(this);
  }

  componentDidMount() {
    this.props.updateCopy(this.state.copy)
  }

  onCopyInputChange(event) {
    this.setState({ copy: event.target.value })
    this.props.updateCopy(this.state.copy)
  }

  onCTAInputChange(event) {
    this.setState({ cta: event.target.value })
  }

  render() {
    return(
      <div>
        <form>
          <input
            placeholder="Enter Copy"
            value={this.state.copy}
            onChange={this.onCopyInputChange}
          />
          <input
            placeholder="Enter CTA"
            value={this.state.cta}
            onChange={this.onCTAInputChange}
          />


        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { updateCopy, updateCTA }, dispatch)
}

export default connect(null, mapDispatchToProps)(DynamicInput)
