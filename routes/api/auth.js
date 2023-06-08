const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
  updateSubscription,
} = require("../../controllers/auth");

const { authenticate, validateAuth } = require("../../middlewares/");
const {
  registerSchemas,
  loginSchemas,
  subscriptionSchemas,
} = require("../../schemas");

const router = express.Router();

router.post("/register", validateAuth(registerSchemas), register);
router.post("/login", validateAuth(loginSchemas), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);
router.patch(
  "/",
  authenticate,
  validateAuth(subscriptionSchemas),
  updateSubscription
);

module.exports = router;
