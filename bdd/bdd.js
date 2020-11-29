var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'gilles',
    password: 'Gilles-04'
});

export default connection;