const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit:5,
    host:'localhost',
    user:'root',
    password:'root',
    database:'trade-db'
})

module.exports = pool;