const express = require('express')
const {
    listofContacts,
    findContactbyId,
    createContact
} = require('../controllers/contactusController')

const contactRouter = express.Router();

contactRouter.get('/', listofContacts)

contactRouter.get('/:id', findContactbyId);

contactRouter.post('/', createContact);

module.exports = contactRouter;