const Product = require("../../models/Product");

const fetchAllProduct = async (req, res) => {
  try {
    const productList = await Product.find();
    res.status(200).json({
      productList: productList,
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const fetchAllFilterProduct = async (req, res) => {
  try {
    const { category = [], brand = [], sortBy = "price-lowtohigh" } = req.query;
    let queryFilter = {};
    if (category.length) {
      queryFilter.category = { $in: category.split(",") };
    }
    if (brand.length) {
      queryFilter.brand = { $in: brand.split(",") };
    }

    let sort = {};
    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1;
        break;
      case "price-hightolow":
        sort.price = -1;
        break;
      case "title-atoz":
        sort.title = 1;
        break;
      case "title-ztoa":
        sort.title = -1;
        break;
      default:
        sort.price = 1;
        break;
    }
    const products = await Product.find(queryFilter).sort(sort);
    res.status(200).json({
      products: products,
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

module.exports = { fetchAllProduct, fetchAllFilterProduct };
