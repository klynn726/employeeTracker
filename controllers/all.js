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

var allDept = {
  displayAllDept: (callback = ()=>{})=> {
    var connection = mysql.createConnection(dbconfig);
    let queryString = `SELECT departments.*`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      console.table(res);
      callback();
    })
    connection.end();
  }
};

var allRoles = {
  displayAllRoles: (callback = ()=>{})=> {
    var connection = mysql.createConnection(dbconfig);
    let queryString = `SELECT departments.*`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      console.table(res);
      callback();
    })
    connection.end();
  }
};

var allEmployees = {
  displayAllEmployees: (callback = ()=>{})=> {
    var connection = mysql.createConnection(dbconfig);
    let queryString = `SELECT departments.*`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      console.table(res);
      callback();
    })
    connection.end();
  }
};



module.exports = allDept, allRoles, allEmployees

// let queryString = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, concat(manager_id.first_name, ' ',  manager.id.last_name) AS manager FROM employee employee LEFT JOIN employee manager ON employee.manager_id = manager.id INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC;`;
