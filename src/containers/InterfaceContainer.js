import { connect } from 'react-redux';
import InterfaceOption from '../components/keyboards/InterfaceOption';
import { filterByInterfaceAction } from '../actions/interfaceActions';
// Container

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter.label === state.itemsReducer.interface
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFilterByInterface: () => dispatch(filterByInterfaceAction(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterfaceOption);
