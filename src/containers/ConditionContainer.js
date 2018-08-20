import { connect } from 'react-redux';
import ConditionOption from '../components/keyboards/ConditionOption';
import { filterByConditionAction } from '../actions/conditionActions';
// Container

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter.label === state.condition
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFilterByCondition: () => dispatch(filterByConditionAction(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConditionOption);
