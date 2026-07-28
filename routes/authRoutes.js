const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

const validate = require("../middleware/validateMiddleware");

router.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);

router.post(
  "/login",
  loginValidation,
  validate,
  loginUser
);

module.exports = router;