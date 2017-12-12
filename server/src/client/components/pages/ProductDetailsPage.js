import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product.actions';
import ProductDetails from '../ProductDetails/ProductDetails';

class ProductDetailsPage extends Component {
  componentDidMount() {
    this.props.getProducts();
    window.scrollTo(0, 0);
  }

  //  return users
  renderProduct() {
    return this.props.products.filter(product => product.slug===this.props.match.params.slug)[0];
  }

  render() {
    return (
      <ProductDetails product={this.renderProduct()} />
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
  component: connect(mapStateToProps, { getProducts })(ProductDetailsPage),
};
