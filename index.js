const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoutes = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoutes);

app.get('/', (req, res) => res.send("Hellow from the Server"));
app.listen(3000, () => console.log("Server running on 3000"));

mongoose
  .connect(
    "mongodb+srv://rehmansaima:BhoGP8ohaLJFhZXM@backenddb.ctk9ehy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Connection Failed"));