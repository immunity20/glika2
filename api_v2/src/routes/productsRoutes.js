import requireLogin from '../middlewares/requireLogin';
import * as ProductController from '../controllers/product.controller';

module.exports = (app) => {
  app.get('/products', (req, res) => {
    ProductController.getProducts(req, res);
  });
};
