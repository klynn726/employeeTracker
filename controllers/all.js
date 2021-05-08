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
    let queryString = `SELECT department.*`;
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
    let queryString = `SELECT role.*`;
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
    let queryString = `SELECT employee.*`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      console.table(res);
      callback();
    })
    connection.end();
  }
};



module.exports = allDept, allRoles, allEmployees

