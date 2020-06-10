const {httpUtil,messages} = require('../../utils');
const mysql = require('../../utils/db');
const sql = require('./sql');
const {TRADE_MESSAGES} = messages;
const validator = require('./validator');
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
exports.insertTrades = async (req,res) => {
    try {
        const insertData =req.body;
        await validator.validateData(insertData)
        await mysql.query(sql.CHECK_TRADE_WITH_ID, [insertData.id], (err, existedData) => {
        if(existedData && existedData.length > 0) 
            return res.send(httpUtil.getBadRequest(TRADE_MESSAGES.EXISTED_TRADE));
        mysql.query(sql.INSERT_TRADES, [
            insertData.id,
            insertData.type,
            insertData.userId,
            insertData.symbol,
            insertData.shares,
            insertData.price,
            insertData.timestamp
        ], (err, created) => {
            console.log(err)
            if(err) return res.send(httpUtil.getException(TRADE_MESSAGES.EXISTED_TRADE));
            return res.send(httpUtil.getCreated(created, TRADE_MESSAGES.CREATED_SUCCESSFULLY))
        });
    });  
    } catch (error) {
        console.log(error)
        return res.json(httpUtil.getBadRequest([error.name,error.details[0].message]))
    }      
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