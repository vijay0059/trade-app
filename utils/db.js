const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit:5,
    host:'localhost',
    user:'root',
    password:'root',
    database:'trade_db'
})

module.exports = pool;