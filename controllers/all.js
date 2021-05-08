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

// mysql workbench fix db connection settings to match actual setting, double check query to make sure it's named properly
var all = {
  displayAll: (callback = ()=>{})=> {
    var connection = mysql.createConnection(dbconfig);
    let queryString = `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ',  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC;`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      console.table(res);
      callback();
    })
    connection.end();

  }
  
};

module.exports = all