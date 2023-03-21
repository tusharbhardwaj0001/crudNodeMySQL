const express = require("express");

const { createContact, getContact, updateContact, deleteContact } = require("../controllers/contact.js");

const router = express.Router();

router.post("/createContact", createContact);

router.get("/getContact/:id", getContact);

router.post("/updateContact/:id", updateContact);

router.post("/deleteContact/:id", deleteContact);

module.exports = router;