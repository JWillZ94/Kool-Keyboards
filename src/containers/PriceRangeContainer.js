import { connect } from 'react-redux';
import PriceRangeOption from '../components/keyboards/PriceRangeOption';
import { filterByPriceRangeAction } from '../actions/priceRangeActions';
// Container

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter.label === state.itemsReducer.priceRange
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFilterPriceRange: () => dispatch(filterByPriceRangeAction(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceRangeOption);
