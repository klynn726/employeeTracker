const inquirer = require('inquirer');
// const db = require('./db/tracker_db');
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
    allController.allDept(mainMenu);
    break;
  case 'view all roles':
    allController.allRoles(mainMenu);
    break;
  case 'view all employees': 
    allController.allEmployees(mainMenu);
    break;
  case 'add a department': 
    allController.addDepartment(mainMenu);
    break;
  case 'add a role': 
    allController.addRole(mainMenu);
    break;
  case 'add an employees': 
    allController.addEmployee(mainMenu);
    break;
  case 'update an employee role': 
    allController.updateEmploye(mainMenu);
    break;
}})}


mainMenu();

