module.exports = {
    DELETE_ALL_TRADES: 'truncate trade_details',
    GET_USER_TRADES: 'SELECT * FROM trade_details WHERE id=?'
}