const express = require("express");

const {
  getAllContacts,
  getContById,
  addCont,
  removeCont,
  updateContById,
} = require("../../controllers/contacts");

const router = express.Router();

const { validateAddBody, validateUpdateBody } = require("../../middlewares/");
const { addSchema } = require("../../schemas");

router.get("/", getAllContacts);

router.get("/:contactId", getContById);

router.post("/", validateAddBody(addSchema), addCont);

router.delete("/:contactId", removeCont);

router.put("/:contactId", validateUpdateBody(addSchema), updateContById);

module.exports = router;
