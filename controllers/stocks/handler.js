const {httpUtil,messages} = require('../../utils');
const mysql = require('../../utils/db');
const sql = require('./sql');
const {STOCK_MESSAGES} = messages;

/**
 * Method to get selected user trades
 */
exports.getAllStocks = async (req,res) => {
    const {stockSymbol} = req.params
    const {type,start,end} = req.query;
    if(stockSymbol !== 'AC') return res.json(httpUtil.getNotFound(STOCK_MESSAGES.INVALIED_STOCK_SYMBOL))
    await mysql.query(sql.LIST_ALL_TRADES, [stockSymbol,type,start,end], (error, results) => {
        console.log(error)
        if(error) res.json(httpUtil.getException());
        const responseObj = results.map(result => ({
            id:result.id,
            type:result.type,
            user:{
                id:result.userId,
                name:result.name
            },
            symbol:result.symbol,
            shares:result.shares,
            price:result.price,
            timestamp:result.timestamp
        }));
        return res.json(httpUtil.getSuccess(responseObj));
    });
};