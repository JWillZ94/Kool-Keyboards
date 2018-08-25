import { connect } from 'react-redux';
import AvailabilityOption from '../components/keyboards/AvailabilityOption';
import { filterByAvailabilityAction } from '../actions/availabilityActions';
// Container

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter.label === state.itemsReducer.availability
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFilterByAvailability: () => dispatch(filterByAvailabilityAction(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailabilityOption);
