const dev = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY_DEV,
  BILL_API: process.env.REACT_APP_BILL_API_DEV,
  API_KEY: process.env.REACT_APP_API_KEY_DEV,
};

const prod = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY_PROD,
  BILL_API: process.env.REACT_APP_BILL_API_PROD,
  API_KEY: process.env.REACT_APP_API_KEY_PROD,
};

const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default config;
