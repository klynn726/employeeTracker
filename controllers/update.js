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


  var updateEmployee = () => {
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



module.exports = updateEmployee

