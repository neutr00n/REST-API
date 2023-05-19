const express = require("express");

const {
  getAllContacts,
  getContById,
  addCont,
  removeCont,
  apdateContById,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", getContById);

router.post("/", addCont);

router.delete("/:contactId", removeCont);

router.put("/:contactId", apdateContById);

module.exports = router;
