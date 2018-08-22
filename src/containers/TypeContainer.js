import { connect } from 'react-redux';
import TypeOption from '../components/keyboards/TypeOption';
import { filterByTypeAction } from '../actions/typeActions';
// Container

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter.label === state.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFilterByType: () => dispatch(filterByTypeAction(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeOption);
