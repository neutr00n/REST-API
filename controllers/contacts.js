const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  apdateById,
} = require("../models/contacts");

const { ctrlWrapper, HttpError } = require("../helpers/index");

const getAllContacts = async (req, res) => {
  const allContacts = await listContacts();
  res.status(200).json(allContacts);
};

const getContById = async (req, res) => {
  const { contactId } = req.params;

  const contact = await getContactById(contactId);

  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(contact);
};

const addCont = async (req, res) => {
  const contact = await addContact(req.body);

  res.status(201).json(contact);
};

const removeCont = async (req, res) => {
  const { contactId } = req.params;
  const contact = await removeContact(contactId);

  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const updateContById = async (req, res) => {
  const { contactId } = req.params;

  const contact = await apdateById(contactId, req.body);

  if (!contact) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(contact);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContById: ctrlWrapper(getContById),
  addCont: ctrlWrapper(addCont),
  removeCont: ctrlWrapper(removeCont),
  updateContById: ctrlWrapper(updateContById),
};
