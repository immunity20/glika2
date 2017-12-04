export const GET_PRODUCTS = 'get_products';
export const getProducts = () => async (dispatch, getState, api) => {
  //  get response from our request and dispatch the data to reducer
  const res = await api.get('/products');
  dispatch({
    type: GET_PRODUCTS,
    payload: res,
  });
};
