const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


// ! THESE LINES ARE NECESSARY TO GIVE US req.body TO BE ACCESSED IN EASY AND READABLE FORMAT
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/* CONNEXTS TO DB, MUST EXIST TO CONNECT WITHIN IT*/
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'M@keMoney$2021',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);


// RUNS QUERY AGAISNT THE DB. IT RUNS WITHIN THE TERMINAL AND RUNS THE .SQL SHELL 
// GIVES US LOG OF ALL STUDENT ROWS
db.query('SELECT * FROM students', function (err, results) {
  if(err) throw err;
  console.log(results);
});


// GIVES A 404 NOT FOUND FOR ANY CLIENT REQUESTS
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});