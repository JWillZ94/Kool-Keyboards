import { connect } from 'react-redux';
import BrandOption from '../components/keyboards/BrandOption';
import { filterByBrandAction } from '../actions/brandActions';
// Container

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter.label === state.brand
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFilterByBrand: () => dispatch(filterByBrandAction(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandOption);
