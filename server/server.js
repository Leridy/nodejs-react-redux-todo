let config = require('../webpack.config');
let express = require('express');
let path = require('path');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');


let app = express();
let port = 8888;

let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./client/'));

app.get("/", function(req, res) {
  res.render(path.resolve('client/index.html'));
});

app.get("/css",function (req, res, next) {
    res.sendFile(path.resolve('client/css/'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.log("Express server listening on port", port);
  }
});
