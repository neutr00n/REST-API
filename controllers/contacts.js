const Contact = require("../models/contact");

const { ctrlWrapper, HttpError } = require("../helpers/index");

const getAllContacts = async (req, res) => {
  const allContacts = await Contact.find();
  res.status(200).json(allContacts);
};

const getContById = async (req, res) => {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(contact);
};

const addCont = async (req, res) => {
  const contact = await Contact.create(req.body);

  res.status(201).json(contact);
};

const removeCont = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndRemove(contactId);

  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const updateContById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!contact) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(contact);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

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
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
