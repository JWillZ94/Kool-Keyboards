import SortOption from '../components/keyboards/SortOption';
import { connect } from 'react-redux';
import { sortAction } from '../actions/sortActions';

const mapStateToProps = (state, ownProps, active) => ({
  active: ownProps.sort.label === state.itemsReducer.sort,
  sort: ownProps.sort
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSort: () => dispatch(sortAction(ownProps.sort))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortOption);
