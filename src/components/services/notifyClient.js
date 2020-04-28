import config from "../../config";

const URL = config.CONFIRMATION_API;
const API_KEY = config.API_KEY;

export default async ({ to }) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ to }),
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
    });

    const emailResponse = await response.json();

    return JSON.parse(emailResponse.body);
  } catch (err) {
    return err;
  }
};
