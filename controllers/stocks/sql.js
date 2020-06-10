module.exports = {
    LIST_ALL_TRADES: `SELECT 
        td.id,td.type,ud.id userId,ud.name,td.symbol,td.shares,td.price,td.timestamp 
        FROM trade_details td
        LEFT JOIN user_details ud ON ud.id = td.user_id
        WHERE td.symbol = ? AND td.type= ? AND td.timestamp BETWEEN ? AND ?
        ORDER BY td.id ASC`,
    MIN_MAX_TRADES: `SELECT MAX(price) highest, MIN(price) lowest,symbol 
        FROM trade_details
        WHERE symbol = ? AND timestamp BETWEEN ? AND ?`
}