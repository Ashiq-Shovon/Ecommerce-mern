const express = require("express");
const { postProduct } = require("../../controllers/admin/product-controller");
const router = express.Router();


router.post("/products", postProduct);
router.get("/products", postProduct);

module.exports = router;