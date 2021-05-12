const express = require('express');
const mysql = require('mysql');

const configuration = {
    host: 'db',
    user: 'root',
    password : 'root',
    database: 'nodedb'
};

const app = express();

const connection = mysql.createConnection(configuration);
connection.connect();

function addName(connection) {
    connection.query('INSERT INTO people (name) VALUES ("Gustavo")', (error, results, _) => {
        if (error != null) {
            console.log(error);
        }
    });
    connection.commit();
};

function getNames(callback) {
    connection.query('SELECT * FROM people', (error, results, _) => {
        if (error != null) {
            console.log(error);
        }
        callback(results);
    })
};

app.get('/', (req, res) => {
    addName(connection);

    getNames((names) => {
        var result = '<h1>Full Cycle Rocks!</h1><br/>';

        for (i = 0; i < names.length; i++) {
            result += '- ' + names[i].name + '</br>';
        }
        res.send(result);
    });
})

app.listen(3000, () => {
    console.log("Listening...");
})