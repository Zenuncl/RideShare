var express = require('express');
var app = express()

var bodyParser = require('body-parser');
var stripe = require("stripe")("sk_test_eylkYbtKltkf4TUoiRNCUxoj");

app.use(bodyParser.json());
app.post('/stripe-charge', function (req, res) {
  var token = req.body.id; // request token id

  // Charge the user's card:
  var charge = stripe.charges.create({
    amount: 500,
    currency: "cad",
    description: "RideShare Reservation Fee.",
    source: token,
  }, function(err, charge) {
    if (err === null){
      if (charge.status === 'successed'){
        // Update database
        res.send(charge);
      }else{
        res.send(charge);
      }
    }else{
      res.send(err);
    }
  });

});

app.get('/number-of-spots', function (req, res) {
  res.send("Hi")
});

app.listen(3300, function () {
  console.log('Example app listening on port 3000!')
})