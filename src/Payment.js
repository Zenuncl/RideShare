import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'elemental';
import './App.css';
// import logo from './logo.png';

class Payment extends Component {

  onToken = (token) => {
    fetch('http://localhost:3300/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      response.json().then(data => {
        return (data);
      });
    });
  }

  render() {
    return (
      <div className="Payment">
        <StripeCheckout
          name="RideShare Kingston"
          description="Reservation Fee for RideShare."
          // image={logo}
          ComponentClass="div"
          panelLabel="Give Money"
          amount={500}
          currency="CAD"
          stripeKey="pk_test_55qsM1PZ5USDOOUeDhdv1GVF"
          locale="en"
          email="SharkIng@Shacas.com"
          // Note: Enabling either address option will give the user the ability to
          // fill out both. Addresses are sent as a second parameter in the token callback.
          // billingAddress={true}
          // Note: enabling both zipCode checks and billing or shipping address will
          // cause zipCheck to be pulled from billing address (set to shipping if none provided).
          // zipCode={true}
          // alipay
          // bitcoin
          allowRememberMe
          token={this.onToken}
          >
          <Button type="primary">Deposit</Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default Payment;
