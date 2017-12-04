import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import Product from '../models/Product';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getProducts(req, res) {
  Product.find().sort('-dateAdded').exec((err, products) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(products);
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addProduct(req, res) {
  if (!req.body.product.title || !req.body.product.img || !req.body.product.price) {
    res.status(403).end();
  }

  const newProduct = new Product(req.body.product);

  // Let's sanitize inputs
  newProduct.title = sanitizeHtml(newProduct.title);
  newProduct.img = sanitizeHtml(newProduct.img);
  newProduct.price = sanitizeHtml(newProduct.price);

  newProduct.slug = slug(newProduct.title.toLowerCase(), { lowercase: true });
  newProduct.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ product: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getProduct(req, res) {
  Product.findOne({ slug: req.params.slug }).exec((err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ product });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteProduct(req, res) {
  Product.findOne({ slug: req.params.slug }).exec((err, product) => {
    if (err) {
      res.status(500).send(err);
    }

    product.remove(() => {
      res.status(200).end();
    });
  });
}
