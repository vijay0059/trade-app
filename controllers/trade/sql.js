module.exports = {
    DELETE_ALL_TRADES: 'TRUNCATE trade_details',
    INSERT_TRADES: 'INSERT INTO trade_details VALUES(?,?,?,?,?,?,?)',
    CHECK_TRADE_WITH_ID: 'SELECT * FROM trade_details WHERE id = ?',
    LIST_TRADES:`SELECT 
        td.id,td.type,ud.id userId,ud.name,td.symbol,td.shares,td.price,td.timestamp 
        FROM trade_details td
        JOIN user_details ud ON ud.id = td.user_id
        ORDER BY id ASC`,
    GET_USER_TRADES:`SELECT 
        td.id,td.type,ud.id userId,ud.name,td.symbol,td.shares,td.price,td.timestamp 
        FROM trade_details td
        LEFT JOIN user_details ud ON ud.id = td.user_id
        WHERE ud.id = ?
        ORDER BY td.id ASC`
}