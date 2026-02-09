const express = require("express");
const router = express.Router();
const validateCart = require("../middleware/validateCart");

router.post("/", validateCart, (req, res) => {
  res.json({
    message: "Item added to cart",
    data: req.body
  });
});

module.exports = router;

