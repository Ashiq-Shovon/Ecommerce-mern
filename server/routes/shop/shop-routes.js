const express = require("express");
const { fetchAllProduct, fetchAllFilterProduct } = require("../../controllers/shop/shop-controller");
const router = express();

router.get("/fetchAllProduct", fetchAllProduct);
router.get("/fetchAllFilterProduct", fetchAllFilterProduct);

module.exports = router;
