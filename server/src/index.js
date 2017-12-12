//  polyfill for express (es6/7 to es5)
import 'babel-polyfill';
import express from 'express';
import compression from 'compression';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(compression());
//  proxy on server renderer to api server
app.use('/api', proxy('http://localhost:7070/', {
  proxyReqOptDecorator(opts) {
    //  app the forwared host in header so google oauth  likes us
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  },
}));

// make public folder public
app.use(express.static('public'));
//  serve '/' url
app.get('*', (req, res) => {
  //  have todo stuff before give store to renderer,
  // send the req it has the cookies
  const store = createStore(req);
  //  get which components i need to render - Matchroute
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // if loadData exist call it
    return route.loadData ? route.loadData(store) : null;
  }).map((promise) => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(() => {
    // not found page ssr implentation
    const context = {};
    const content = renderer(req, store, context);
    //  if context has url property -> it hit redirect
    if (context.url) {
      return res.redirect(301, context.url);
    }
    // context has notFound property -> it hit not exist page
    if (context.notFound) {
      res.status(404);
    }
    //  pass request req inside renderer so we can get url for staticrouter
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
