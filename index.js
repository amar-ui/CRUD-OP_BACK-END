var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const cors = require('cors');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',                       //databaseconnection
  password: '',
  database: 'student',
  port: 3306
});
// app.use(bodyParser.json());
// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});

app.get('/test', (req, res) => {
    console.log('hii');
    res.sendStatus(200);
  });

  