const dev = {
  STRIPE_KEY: process.env.STRIPE_KEY_DEV,
  API_KEY_SERVELESS: process.env.API_KEY_SERVELESS_DEV,
  URL_SERVELESS: process.env.URL_SERVELESS,
};

const prod = {
  STRIPE_KEY: process.env.STRIPE_KEY_PROD,
  API_KEY_SERVELESS: process.env.API_KEY_SERVELESS_PROD,
  URL_SERVELESS: process.env.URL_SERVELESS_PROD,
};

const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  ...config,
};
