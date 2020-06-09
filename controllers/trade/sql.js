module.exports = {
    DELETE_ALL_TRADES: 'TRUNCATE trade_details',
    INSERT_TRADES: 'INSERT INTO trade_details VALUES(?,?,?,?,?,?,?)',
    CHECK_TRADE_WITH_ID: 'SELECT * FROM trade_details WHERE id = ?'
}