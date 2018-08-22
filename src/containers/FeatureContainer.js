import { connect } from 'react-redux';
import FeatureOption from '../components/keyboards/FeatureOption';
import { filterByFeatureAction } from '../actions/featureActions';
// Container

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter.label === state.feature
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFilterByFeature: () => dispatch(filterByFeatureAction(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureOption);
