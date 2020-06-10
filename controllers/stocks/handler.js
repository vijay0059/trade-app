const {httpUtil,messages} = require('../../utils');
const mysql = require('../../utils/db');
const sql = require('./sql');
const {STOCK_MESSAGES} = messages;
const validator = require('./validate');
/**
 * Method to get selected user trades
 */
exports.getAllStocks = async (req,res) => {
    try {
        const {stockSymbol} = req.params
        const {type,start,end} = req.query;
        const validateObj = {...req.params,...req.query};
        await validator.validateAllStocks(validateObj);
        await mysql.query(sql.LIST_ALL_TRADES, [stockSymbol,type,start,end], (error, results) => {
            console.log('All Stock Error', error);
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
    } catch (error) {
        return res.json(httpUtil.getBadRequest([error.name,error.details[0].message]))
    }
};

/**
 * Method to get Min and Max Trades
 */
exports.getMinAndMaxStocks = async (req,res) => {
    try {
        const {stockSymbol} = req.params
        const {start,end} = req.query;
        const validateObj = {...req.params,...req.query};
        await validator.validateDateRangeStocks(validateObj)
        await mysql.query(sql.MIN_MAX_TRADES,[stockSymbol,start,end], (error, result) => {
            console.log('Min Max Stock Error', error);
            if(error) return res.json(httpUtil.getException());
            const [minMaxTrades] = result;
            return res.json(httpUtil.getSuccess(minMaxTrades));
        });
    } catch (error) {
        return res.json(httpUtil.getBadRequest([error.name,error.details[0].message]))
    }
};