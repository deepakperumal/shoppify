const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    app: process.env.APP,
    env: process.env.NODE_ENV,
    secret: process.env.APP_SECRET,
    hostname: process.env.HOSTNAME,
    mongoURL: {
      dev: process.env.MONGO_DEV_URI,
      prod: process.env.MONGO_PROD_URI
    }
  }
  