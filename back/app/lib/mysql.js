const mysql = require('mysql');
const config = require('config');
const fs = require('fs-extra');
const path = require('path');

const StringHelper = require('./string');

const connection = mysql.createConnection(config.get('mysql'));


module.exports.connect = function() {
  return connection.connect().catch(err => {
    console.log('Cannot connect to MySQL', err.stack);
    
    throw err;
  });
}; 

module.exports.getConnection = function getConnection() {
  return connection;
}; 

module.exports.loadFile = (dirname) => function loadFile(file, values) {
  var sql = fs.readFileSync(path.join(dirname, file)).toString();
  
  return values && Object.keys(values).length
    ? StringHelper.replaceWithObject(sql, values)
    : sql;
};