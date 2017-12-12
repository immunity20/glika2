import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


class ProductDetails extends Component {
  componentDidMount() {
  }

  //  return users
  renderProducts() {
    const { product } = this.props;

    return (
      <div className="card p-2 my-3">
        <Helmet>
          <title>{`${product.title} - ${product.category} - Το Σταρένιο`}</title>
        </Helmet>
        <div className="row pb-4 pt-2"><h1 className="col-12 text-center">{`${product.title} - ${product.category}`}</h1></div>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-2">
            <img className="card-img-top" src={product.img} alt={`${product.title} - ${product.category}`} />
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <div className="column">
              <div className="row">
                <div className="col-md-12 col-lg-4 pt-2">Παντεσπάνι:</div>
                <div className="col-md-12 col-lg-8 ">
                  <select className="form-control">
                    <option>{product.zimi}</option>
                  </select>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 col-lg-4 pt-2">Γέμιση:</div>
                <div className="col-md-12 col-lg-8 ">
                  <select className="form-control">
                    <option>{product.frosting}</option>
                  </select>
                </div>
              </div>
              <div className="row mt-2 align-bottom">
                <div className="col-4 pt-2">Τιμή:</div>
                <div className="col-8 pt-2">
                  {product.price}€/{product.unit}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3" id="description">
          <div className="col-12"><h2>Περιγραφή</h2><p className="text-justify">{product.content}</p></div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderProducts()}
      </div>
    );
  }
}

//  export
export default ProductDetails;
