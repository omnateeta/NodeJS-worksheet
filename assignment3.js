 // Import file system module
const fs = require('fs');

// Function to read all contacts from JSON file
function readContacts() {
  const data = fs.readFileSync('contacts.json', 'utf8');
  return JSON.parse(data); // Convert JSON string to JS array
}


// Function to display all contacts nicely
function displayContacts(contacts) {
  console.log('\n Contact List:');
  contacts.forEach(contact => {
    console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
  });
}


// Function to add a new contact
function addContact(newContact) {
  const contacts = readContacts();
  contacts.push(newContact);
  fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2)); // Save formatted JSON
  console.log(` New contact added: ${newContact.name}`);
}


// Function to find a contact by name
function findContactByName(name) {
  const contacts = readContacts();
  const found = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  if (found) {
    console.log('\n Contact Found:');
    console.log(found);
  } else {
    console.log(` No contact found with name "${name}"`);
  }
}


// Function to delete a contact by ID
function deleteContactById(id) {
  let contacts = readContacts();
  const initialLength = contacts.length;
  contacts = contacts.filter(contact => contact.id !== id);
  if (contacts.length < initialLength) {
    fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2));
    console.log(` Contact with ID ${id} deleted.`);
  } else {
    console.log(` No contact found with ID ${id}`);
  }
}


// 1️.Read and display all contacts
let contacts = readContacts();
displayContacts(contacts);

// 2️.Add a new contact
const newContact = {
  id: 4,
  name: 'Diana Prince',
  email: 'diana@example.com',
  phone: '9001122334'
};
addContact(newContact);

// 3️.Verify by reading again
contacts = readContacts();
displayContacts(contacts);

// 4️.Find a contact by name
findContactByName('Alice Johnson');

// 5️.Delete a contact by ID
deleteContactById(2);

// 6️.Verify deletion
contacts = readContacts();
displayContacts(contacts);
