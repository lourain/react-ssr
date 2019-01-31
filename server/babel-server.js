"use strict";

var _preset = _interopRequireDefault(require("css-modules-require-hook/preset"));

var _assetRequireHook = _interopRequireDefault(require("asset-require-hook"));

var _stream = require("stream");

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _route = _interopRequireDefault(require("../src/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//处理less
(0, _assetRequireHook.default)({
  extensions: ['png', 'jpg'],
  name: '[name].[ext]',
  publicPath: 'static/images/'
});
var tagClose = new _stream.Readable();

var express = require('express');

var server = express();

var path = require('path');

server.use(express.static(path.resolve('dist')));
server.use(function (req, res, next) {
  if (req.url.startsWith('/user/') || req.url.startsWith('/static/')) {
    return next();
  }

  var context = {};
  var ReactSSR = (0, _server.renderToNodeStream)(_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, _react.default.createElement(_route.default, null)));
  var html = "\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\"/>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n                <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"/>\n                <title>Document</title>\n                <link rel=\"stylesheet\"  href=\"styles.css\"/>\n            </head>\n            <body>\n                <noscript>\n                    You need to enable JavaScript to run this app.\n                </noscript>\n                <div id=\"root\">";
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(html);
  ReactSSR.pipe(res, {
    end: false
  });
  ReactSSR.on('end', function () {
    res.write("</div>\n            </body>\n        </html>");
    res.end();
  });
});
server.listen(9999, function () {
  console.log('runnig9999...');
});
