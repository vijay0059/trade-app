const {httpUtil,messages} = require('../../utils');
const mysql = require('../../utils/db');
const sql = require('./sql');
const {TRADE_MESSAGES} = messages;

/**
 * Method for Delete All trades
 */
exports.deleteAllTrades = (req,res) => {
    mysql.query(sql.DELETE_ALL_TRADES, (error, result) => {
        if(error) res.json(httpUtil.getException());
        res.json(httpUtil.getSuccess('Success',TRADE_MESSAGES.DELETE_SUCCESS));
    });
}

/**
 * Method to insert trades
 */
exports.insertTrades = (req,res) => {
    const insertData =req.body;
    mysql.query(sql.CHECK_TRADE_WITH_ID, [insertData.id], (err, existedData) => {
        if(existedData.length > 0) return res.send(httpUtil.getBadRequest(TRADE_MESSAGES.EXISTED_TRADE));
        mysql.query(sql.INSERT_TRADES, [
            insertData.id,
            insertData.type,
            insertData.userId,
            insertData.symbol,
            insertData.shares,
            insertData.price,
            new Date()
        ], (err, created) => {
            if(err) return res.send(httpUtil.getBadRequest(TRADE_MESSAGES.EXISTED_TRADE));
            return res.send(httpUtil.getCreated(created, TRADE_MESSAGES.CREATED_SUCCESSFULLY))
        });
    });        
};

/**
 * method to get all list of trades
 */

exports.getListTrades = async (req,res) => {
    await mysql.query(sql.LIST_TRADES, (error, results) => {
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
        res.json(httpUtil.getSuccess(responseObj));
    });
};

/**
 * Method to get selected user trades
 */
exports.getUserTrdes = async (req,res) => {
    const {userID} = req.params
    await mysql.query(sql.GET_USER_TRADES, [userID], (error, results) => {
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
        res.json(httpUtil.getSuccess(responseObj));
    });
};