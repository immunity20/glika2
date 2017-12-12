import requireLogin from '../middlewares/requireLogin';
import * as ProductController from '../controllers/product.controller';

module.exports = (app) => {
  app.get('/products', (req, res) => {
    ProductController.getProducts(req, res);
  });
  app.get('/product/:slug', (req, res) => {
    ProductController.getProduct(req, res);
  });
  app.get('/products/:category', (req, res) => {
    ProductController.getProducts(req, res);
  });
};
