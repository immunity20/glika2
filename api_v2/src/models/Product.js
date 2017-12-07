const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: 'String', required: true },
  zimi: { type: 'String', required: true },
  frosting: { type: 'String', required: true },
  min_quantity: { type: 'Number', required: false },
  unit: { type: 'String', required: true },
  price: { type: 'Number', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  slug: { type: 'String', required: true },
  category: { type: 'String', required: true },
  content: { type: 'String', required: false },
  meta_desc: { type: 'String', required: true },
  meta_key: { type: 'String', required: true },
  tag: { type: 'String', required: false },

});

export default mongoose.model('Product', productSchema);
