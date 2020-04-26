import React from "react";
import StripeCheckout from "react-stripe-checkout";

class ChargeCustomer extends React.Component {
  onToken = async (res) => {
    console.log(res);
  };
  render() {
    return (
      <StripeCheckout
        amount={300}
        name="Investment"
        description={`Servicio: Inversión Package`}
        stripeKey={process.env.StripePublicKey}
        currency="EUR"
        email={"test@gmail.com"}
        token={(res) => this.onToken(res)}
      >
        {this.props.children}
      </StripeCheckout>
    );
  }
}

export default ChargeCustomer;
