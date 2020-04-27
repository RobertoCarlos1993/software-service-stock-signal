import React from "react";
import StripeCheckout from "react-stripe-checkout";
import config from "../config";
import billUser from "./services/billClient";
import notifyClient from "./services/notifyClient";

const priceService = 3000; // it is typed in cents as per Stripe reqs
const ONE_MONTH_SERVICE = 1;

class ChargeCustomer extends React.Component {
  onToken = async (res) => {
    const { id, email } = res;
    try {
      const response = await billUser({
        token: id,
        email,
        months: ONE_MONTH_SERVICE,
      });

      if (response.paid) {
        try {
          await notifyClient({ to: email });

          alert(
            "Su pago se realizo satisfactoriamente y pronto va a recibir un email"
          );
        } catch (err) {
          alert("Something went wrong while sending the email");
        }
      }
    } catch (err) {
      alert("Something went wrong while trying to charge your card!");
    }
  };

  render() {
    return (
      <StripeCheckout
        amount={priceService}
        name="Alex Investment"
        description={"Servicio: Oportunidades de Inversión"}
        stripeKey={config.STRIPE_KEY}
        currency="EUR"
        allowRememberMe={false}
        token={(res) => this.onToken(res)}
      >
        {this.props.children}
      </StripeCheckout>
    );
  }
}

export default ChargeCustomer;
