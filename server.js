const inquirer = require('inquirer');
// const db = require('./db/tracker');
const allController = require('./controllers/all')

const mainMenu = async () => {
  console.log("welcome to employee tracker")
await inquirer.prompt(
  {
    type: 'list',
    name: 'action',
    message: 'Main Menu',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role' ]
  }
)
.then(answer => {
  // console.log(answer)
switch(
  answer.action
)
{
  case 'view all employees': 
  allController.displayAll(mainMenu);
    console.log("view all employees chosen");
    break;
  case 'view all roles':
    console.log("view all roles chosen");
    break;
}


})



}
mainMenu();

