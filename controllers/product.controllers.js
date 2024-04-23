const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};

const getProduct = async (req, res) => {
   try {
     const { id } = req.params;
     const product = await Product.findById(id);
     res.status(200).json(product);
   } catch (error) {
     res.status(500).json({ message: error.message || "Server Error" });
   }
}

const createProduct = async (req, res) => {
try {
  const product = await Product.create(req.body);
  res.status(200).json(product);
} catch (error) {
  res.status(500).json({ message: error.message || "Server Error" });
}
}

const updateProduct = async (req, res) => {
   try {
     const { id } = req.params;
     const product = await Product.findByIdAndUpdate(id, req.body);
     if (!product) return res.status(404).json({ message: "Product not found!" });
     const updatedProd = await Product.findById(id);
     res.status(200).json(updatedProd);
   } catch (error) {
     res.status(500).json({ message: error.message || "Server Error" });
   }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found!" });
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
