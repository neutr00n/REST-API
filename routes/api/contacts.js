const express = require("express");

const {
  getAllContacts,
  getContById,
  addCont,
  removeCont,
  updateContById,
  updateStatusContact,
} = require("../../controllers/contacts");

const {
  validateAddBody,
  validateUpdateBody,
  validateFavorite,
  isValidId,
  authenticate,
} = require("../../middlewares/");
const { addSchema, favoriteSchema } = require("../../schemas");

const router = express.Router();

router.get("/", authenticate, getAllContacts);

router.get("/:contactId", authenticate, isValidId, getContById);

router.post("/", authenticate, validateAddBody(addSchema), addCont);

router.delete("/:contactId", authenticate, isValidId, removeCont);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateUpdateBody(addSchema),
  updateContById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateFavorite(favoriteSchema),
  updateStatusContact
);

module.exports = router;
