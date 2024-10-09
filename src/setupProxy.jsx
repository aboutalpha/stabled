import createProxyMiddleware from 'http-proxy-middleware';
//const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: 'https://unuqz0uxn9.execute-api.us-east-1.amazonaws.com',
  changeOrigin: true,
};

export function hello(app) {
  app.use('/test', createProxyMiddleware(proxy));
};