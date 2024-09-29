const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth/auth-routes");
const productRouter = require("./routes/admin/product-routes");
const shopRouter = require("./routes/shop/shop-routes");

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

// .connect("mongodb+srv://mernEcommerce:FxPYra4DEofRnc05@cluster0.kipmj.mongodb.net/")
mongoose
  .connect("mongodb+srv://mern-ecommerce:mern1748!@cluster0.kipmj.mongodb.net/")
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin", productRouter);
app.use("/api/shop", shopRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
