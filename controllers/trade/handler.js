const tradeDA = require('./handlerDA');
const {httpUtil,messages} = require('../../utils');

const {TRADE_MESSAGES} = messages;

/**
 * Method for Delete All trades
 */
exports.deleteAllTrades = async (req,res) => {
    try {
        await tradeDA.deleteAllTrades();
        res.json(httpUtil.getSuccess('Success',TRADE_MESSAGES.DELETE_SUCCESS));
    } catch (error) {
        res.json(httpUtil.getException())
    }
}