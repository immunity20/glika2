import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product.actions';
import ProductList from '../ProductList/ProductList';

class ProductListPage extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  //  return users
  renderProducts() {
    return this.props.products;
  }

  render() {
    return (
      <ProductList.component />
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
  component: connect(mapStateToProps, { getProducts })(ProductListPage),
};
