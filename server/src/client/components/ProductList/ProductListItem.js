import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ProductListItem extends Component {
  componentDidMount() {
  }

  //  return users
  renderProducts() {
    const { product } = this.props;

    return (
      <div className="card p-2 my-3">
        <Link to={`/product/${product.slug}`}>
          <img className="card-img-top" src={product.thumbnail} alt={product.title} />
        </Link>
        <div className="card-block">
          <Link to={`/product/${product.slug}`}>
            <h5 className="card-title">{product.title}</h5>
          </Link>
          <div className="card-text"><div className="product-price">{product.price}€/{product.unit}</div>
            <Link to={`/product/${product.slug}`} className="btn btn-warning">Αγοράστε</Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        {this.renderProducts()}
      </div>
    );
  }
}

//  export
export default ProductListItem;
