const contacts = require('./contacts')

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: refactoring
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        contacts.listContacts();
      break;

    case "get":
        contacts.getContactById(id);
      break;

    case "add":
        contacts.addContact(name, email, phone);
      break;

    case "remove":
        contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// console.log(1234);
// // process.exit()
// global.testData = 'ssss';

// const { getCurrentDate } = require('./dataUtils')

// // console.log(process.env);
// console.log(getCurrentDate());
// console.log(process.argv);
// console.log(__dirname);
// console.log(__filename);