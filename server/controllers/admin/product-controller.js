const { imageUploadUtils } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const uploadImage = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtils(url);
    res.json({
      success: true,
      result,
    });
  } catch (e) {
    res.json({
      success: false,
      message: "error occured",
    });
  }
};

const addProduct = async (req, res) => {
  const {
    image,
    title,
    description,
    category,
    brand,
    price,
    salePrice,
    totalStock,
  } = req.body;
  try {
    const newProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    });
    newProduct.save();
    res.status(200).json({
      success: "true",
      message: "product addedd successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: "error occured",
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      productList: products,
      message: "getting all data",
    });
  } catch (e) {}
};

const deleteById = async (req, res) => {
  const productId = req.params.productId;
  try {
    await Product.deleteOne({ _id: productId });
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

const editProduct = async (req, res) => {
  const item = req.body;
  try {
    await Product.findOneAndUpdate({ _id: item._id }, item);
    res.status(200).json({
      success: true,
      message: "product edited successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

module.exports = {
  addProduct,
  uploadImage,
  getProduct,
  deleteById,
  editProduct,
};
