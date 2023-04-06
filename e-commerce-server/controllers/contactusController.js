const contacts = require('../models/contactusModel');
const { StatusCodes, ReasonPhrases} = require('http-status-codes')

async function listofContacts(req,res){
    const list = await contacts.find();
    return res.json(list);
}

async function findContactbyId(req,res){
    try {
        const contact = await contacts.findOne({ _id: req.params.id});
        if(!contact) throw Error("contact not found");
        return res.json(contact);
    } catch (error) {
        console.log(error);
    }
}

async function createContact(req,res){
    try {
        const contact = new contacts(req.body);
        await contact.save()
        return res.json(contact)
    } catch (error) {
        return res.json(StatusCodes.UNAUTHORIZED)
        .json({ message: ReasonPhrases.UNAUTHORIZED,
        error: 'error'})
    }
}

module.exports = {
    listofContacts,
    findContactbyId,
    createContact,
}