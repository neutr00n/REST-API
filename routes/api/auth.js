const express = require("express");

const {
  register,
  verify,
  resendVerify,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/auth");

const {
  authenticate,
  validateAuth,
  validateAddBody,
  upload,
} = require("../../middlewares/");
const {
  registerSchemas,
  loginSchemas,
  emailSchema,
  subscriptionSchemas,
} = require("../../schemas");

const router = express.Router();

router.post("/register", validateAuth(registerSchemas), register);
router.get("/verify/:verificationToken", verify);
router.post("/verify", validateAddBody(emailSchema), resendVerify);
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
