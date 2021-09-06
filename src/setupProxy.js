// const proxy  = require('http-proxy-middleware');

// module.exports = function(app){
//     app.use(
//         proxy('/developers',{
//             target:'https://gh-trending-api.herokuapp.com',
//             changeOrigin: true,
//         })
//     );

// }

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/developers',
    createProxyMiddleware({
      target: 'https://gh-trending-api.herokuapp.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/repositories',
    createProxyMiddleware({
      target: 'https://gh-trending-api.herokuapp.com',
      changeOrigin: true,
    })
  );
  // app.use(
  //   '{**}',
  //   createProxyMiddleware({
  //     target: 'https://avatars.githubusercontent.com',
  //     changeOrigin: true,
  //   })
  // );
};
