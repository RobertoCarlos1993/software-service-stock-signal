import config from "../../config";

const URL = config.BILL_API;
const API_KEY = config.API_KEY;

export default async ({ token, months, email }) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ token, months, email }),
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
    });

    const billingResponse = await response.json();

    return JSON.parse(billingResponse.body);
  } catch (err) {
    return err;
  }
};
