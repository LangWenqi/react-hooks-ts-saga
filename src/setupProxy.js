const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  // a20caalqld9vao117n4udk99m1
  // icldh8k88eqe4o1uolg0b9upaj
  // vvitdm1njqgdbi3bqevrm8sgi8
  // d9o0mpbg0j4lbt32v4snkphsnu
  app.use(proxy('/api', { 
    target: 'http://192.168.137.74:9401',
    changeOrigin: true,
    onProxyReq: (proxyReq,req,res) => {
      proxyReq.setHeader('cookie', 'PHPSESSID=m6cof6o6vt5iuainb7a4e06vgk')
    },
  }));
};