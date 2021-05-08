const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoletable = require('console.table');
require('dotenv').config();
const Sequelize = require('sequelize');


const dbconfig =  new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3001
});

var addDept = () => {
  return inquirer.prompt(
    {      
    type: 'input',
    name: 'departmentName',
    message: 'What is the name of the department?',
    })

    .then(deptData => {
      db.addDepartment(deptData.departmentName)
        .then(([data]) => {
          callback()
        })
    })
};

var addRole = () => {
  return inquirer.prompt(
    {      
    type: 'input',
    name: 'roleName',
    message: 'What is the new role?',
    })

    .then(roleData => {
      db.addRole(roleData.roleName)
        .then(([data]) => {
          callback()
        })
    })
};

var addEmployee = () => {
  return inquirer.prompt(
    {      
    type: 'input',
    name: 'employeeName',
    message: 'Please enter a new employee.',
    })

    .then(employData => {
      db.addEmployee(employData.employeeName)
        .then(([data]) => {
          callback()
        })
    })
};


module.exports = addDept, addRole, addEmployee

