import { GET_PRODUCTS } from '../actions/product.actions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
};
