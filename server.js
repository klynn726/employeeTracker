const inquirer = require('inquirer');
// const db = require('./db/tracker');
const allController = require('./controllers/all')

const mainMenu = async () => {
  console.log("Welcome to employee tracker")
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
  case 'view all departments': 
    allController.displayAllDept(mainMenu);
    break;
  case 'view all roles':
    allController.displayAllRoles(mainMenu);
    break;
  case 'view all employees': 
    allController.displayAllEmployees(mainMenu);
    break;
  case 'add a department': 
    allController.displayAddDepartment(mainMenu);
    break;
  case 'add a role': 
    allController.displayAddRole(mainMenu);
    break;
  case 'add an employees': 
    allController.displayAddEmployee(mainMenu);
    break;
  case 'update an employee role': 
    allController.displayUpdateEmploye(mainMenu);
    break;
}})}


mainMenu();

