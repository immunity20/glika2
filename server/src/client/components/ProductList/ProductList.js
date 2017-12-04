import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product.actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.products
  }

  //  return users
  renderProducts() {
    return this.props.products.map(product => <li key={product.id}>{product.title}</li>);
  }

  render() {
    return (
      <div>
        <div>omg omg users:</div>
        <ul>{this.renderProducts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

//  function that will request necessery data by dispatch
function loadData(store) {
  return store.dispatch(getProducts());
}

//  export
export default {
  loadData,
  component: connect(mapStateToProps, { getProducts })(ProductList),
};
