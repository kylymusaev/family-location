export default () => ({
  port: process.env.PORT || 3000,
  isDev: process.env.NODE_ENV === 'development',
  domain: process.env.DOMAIN || 'localhost',
})
