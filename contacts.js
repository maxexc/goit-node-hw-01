const fs = require('fs').promises;
const path = require('path')
const { v4: uuidv4 } = require('uuid');


const contactsPath = path.resolve('./db/contacts.json')

// TODO: document every feature
async function listContacts() {
    await fs.readFile(contactsPath)
            .then((data) => console.log(JSON.parse(data)))
            .catch((error) => console.log(error.message));
    }
  
async function getContactById(contactId) {
    await fs.readFile(contactsPath)
            .then((data) => {
                let contacts = JSON.parse(data);
                console.log(contacts.filter((item) => item.id.includes(contactId)));
            })
            .catch((error) => console.log(error.message))
  }
  
async  function removeContact(contactId) {
    await fs.readFile(contactsPath)
            .then (data => {
                const contacts = JSON.parse(data.toString());
                const newContacts = contacts.filter(contact => contact.id !== contactId);
                fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2))
                    .then(() => { console.log("Successfully removed contact" + contactId)})
                    .catch((error) => {console.log("Operation failed" + error.message);});
            })
            .catch (error => console.error(error.message));
    }
  
async  function addContact(name, email, phone) {
    await fs.readFile(contactsPath)
            .then((data) => {
                const contacts = JSON.parse(data.toString());
                const newContact = {
                    id: uuidv4(),
                    name: name,
                    email: email,
                    phone: phone,
                };
                contacts.push(newContact);
                fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
                    .then(() => { console.log(`User "${name}" successfully added ` )})
                    .catch((error) => {console.log("Operation failed" + error.message);});                    
        })
  }
  
  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };