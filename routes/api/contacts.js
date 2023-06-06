const express = require("express");

const {
  getAllContacts,
  getContById,
  addCont,
  removeCont,
  updateContById,
  updateStatusContact,
} = require("../../controllers/contacts");

const router = express.Router();

const {
  validateAddBody,
  validateUpdateBody,
  validateFavorite,
  isValidId,
} = require("../../middlewares/");
const { addSchema, favoriteSchema } = require("../../schemas");

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getContById);

router.post("/", validateAddBody(addSchema), addCont);

router.delete("/:contactId", isValidId, removeCont);

router.put(
  "/:contactId",
  isValidId,
  validateUpdateBody(addSchema),
  updateContById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite(favoriteSchema),
  updateStatusContact
);

module.exports = router;
