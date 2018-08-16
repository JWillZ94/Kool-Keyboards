import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsComponent from '../components/keyboards/ItemsComponent';
import { fetchKeyboards } from '../actions/itemActions';
// Container

const mapStateToProps = state => {
  return {
    items: state.items
  };
}

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchKeyboards());
  }

  render() {
    const { error, loading, items } = this.props;

    console.log(items);

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {items.kbs.map(kb => <li key={kb._id}>{kb.name}</li>)}
      </ul>
    );
  }
}

export default connect(
  mapStateToProps
)(ItemsContainer);
