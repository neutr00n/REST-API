const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/auth");

const { authenticate, validateAuth, upload } = require("../../middlewares/");
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
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
