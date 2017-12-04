import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
  //  server act as proxy copy and forward the cookie from browser
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:7070/',
    headers: { cookie: req.get('cookie') || '' },
  });

  const store = createStore(
    reducers, {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
  );
  return store;
};
