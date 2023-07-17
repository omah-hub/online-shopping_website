const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

//set up MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'sign_up',
});

//establish connection
connection.connect((error)=> {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the database');
});

//Define routes and handle client request
app.get('/', (req, res) => {
    //Handle the request and database operations here
    // send back the response to the client
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//handle client request
app.get('/', (req, res) => {
    //perform database query to retrieve data
    connection.query('SELECT * FROM sign_up', (error, results) => {
        if (error) {
            console.error('Error executing SELECT * FROM sign_up.clientsSELECT * FROM sign_up.clientsSELECT * FROM sign_up.clientsquery:', error);
            return;
        }
        //Render a HTML template with retrieved data
        res.render('index', { data: results });
        });
    });
    