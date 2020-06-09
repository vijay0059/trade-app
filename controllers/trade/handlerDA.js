const mysql = require('../../utils/db');
const sql = require('./sql');

// Method to execute delete all trades
exports.deleteAllTrades = () => mysql.query(sql.DELETE_ALL_TRADES);