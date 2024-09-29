const express = require("express");
const {
  addProduct,
  uploadImage,
  getProduct,
  deleteById,
  editProduct,
} = require("../../controllers/admin/product-controller");
const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.post("/add-product", addProduct);
router.get("/getAllProducts", getProduct);
router.delete("/deleteProduct/:productId", deleteById);
router.put("/editProduct", editProduct)
router.post("/product/upload-image", upload.single("my_file"), uploadImage);

module.exports = router;
