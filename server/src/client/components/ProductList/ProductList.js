import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product.actions';
import ProductListItem from './ProductListItem';

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  //  return users
  renderProducts() {
    return this.props.products.map((product) => {
      return <ProductListItem product={product} key={product._id} />;
    });
  }

  render() {
    return (
      <div className="container py-2">
        <div className="row">
          {this.renderProducts()}
        </div>
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
