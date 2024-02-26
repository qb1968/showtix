const express = require("express");
const router = express.Router();

const stripe = require("stripe")(
  "sk_test_51OnxVnLYNcJcHr0J4foi97uYl2hNzZHaREQz2wkCXvcOLGpFxSWRCTzTShEQzr3vdr5quRiLTjcTrJVyYIHS0bdW00oWjermv9"


);

router.post("/process", async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Mahadi",
    },
  });

  console.log(
    "Stripe Secret Key:",
    "sk_test_51OnxVnLYNcJcHr0J4foi97uYl2hNzZHaREQz2wkCXvcOLGpFxSWRCTzTShEQzr3vdr5quRiLTjcTrJVyYIHS0bdW00oWjermv9"


  );

  res.status(200).json({
    success: true,
    client_secret: myPayment.client_secret,
  });
});

router.get("/stripeapikey", async (req, res, next) => {
  console.log(
    "Stripe API Key:",
    "pk_test_51OnxVnLYNcJcHr0JtqMrennkM0bpl0RpsqJB2vJiIa87CT54Tv8QkqwG9X4sBcSqeO5tz9Gi37bnEktRiMzd9F5Q00wsgcxYqS"
  );

  res
    .status(200)
    .json({
      stripeApikey:
       "pk_test_51OnxVnLYNcJcHr0JtqMrennkM0bpl0RpsqJB2vJiIa87CT54Tv8QkqwG9X4sBcSqeO5tz9Gi37bnEktRiMzd9F5Q00wsgcxYqS",
    });
});

module.exports = router;
