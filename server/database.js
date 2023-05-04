const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'motivation'
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log('connected as id');
});

module.exports = connection;