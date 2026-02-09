const products = require("../data/products");

const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: "productId and quantity required" });
  }

  if (quantity <= 0) {
    return res.status(400).json({ message: "Quantity must be greater than 0" });
  }

  const productExists = products.find(p => p.id === productId);
  if (!productExists) {
    return res.status(404).json({ message: "Product not found" });
  }

  next();
};

module.exports = validateCart;

