const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: 'String', required: true },
  zimi: { type: 'String', required: true },
  frosting: { type: 'String', required: true },
  price: { type: 'Number', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  slug: { type: 'String', required: true },
});

export default mongoose.model('Product', productSchema);