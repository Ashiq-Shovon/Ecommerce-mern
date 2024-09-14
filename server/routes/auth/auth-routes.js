const express = require("express");
const {
  registerUser,
  loginUser,
  authMiddleware,
} = require("../../controllers/auth/auth-controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/auth-check", authMiddleware, (req, res) => {
  const user = req.user;
  console.log(user)
  res.status(200).json({
    success: true,
    message: "Authenticated user",
    user
  })
})

module.exports = router;
