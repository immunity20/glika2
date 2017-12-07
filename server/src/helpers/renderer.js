import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// render routes from Routes array
import { renderRoutes } from 'react-router-config';
//  protect from xss attack. DAMNED HACKERS!
import serialize from 'serialize-javascript';
import Routes from '../client/routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>);

  return `
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>.navbar { height:92px;background:#fff999;border-bottom: 2px solid rgb(237, 108, 22); }</style>
    <script>
      var cb = function() {
      var l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'styles/custom.css';
      var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h); };
      var raf = requestAnimationFrame || mozRequestAnimationFrame ||
                webkitRequestAnimationFrame || msRequestAnimationFrame;
      if (raf) raf(cb);
      else window.addEventListener('load', cb);
      var cb2 = function() {
        var l = document.createElement('link'); l.rel = 'stylesheet';
        l.href = 'styles/bootstrap.min.css';
        var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h); };
        if (raf) raf(cb2);
        else window.addEventListener('load', cb2);
    </script>
    </head>
    <body style="margin:0px;padding:0px;">
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <script src="bundle.js"></script>
    <noscript>    <link rel="stylesheet" href="styles/bootstrap.min.css">
    <link rel="stylesheet" href="styles/custom.css"></noscript>
    <script> window.onload = function() {
      document.getElementById('topmenu').style.height = "";
    }
    </script>
 </body>
  </html>`;
};
