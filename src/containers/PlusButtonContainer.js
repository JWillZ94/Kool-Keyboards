import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  isOverAmt: ownProps.quantity === ownProps.amt
});

class PlusButtonContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="quantity-symbols">
        <button
          className="sym increment"
          disabled={this.props.isOverAmt}
          onClick={this.props.handleIncrement}
        >+</button>
      </span>
    );
  }
}

export default connect(
  mapStateToProps
)(PlusButtonContainer);
