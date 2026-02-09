const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRoute = require("./routes/products");
const cartRoute = require("./routes/cart");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRoute);
app.use("/cart", cartRoute);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

