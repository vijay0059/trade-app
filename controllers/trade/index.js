const express = require('express');
const handler = require('./handler');
const router = express.Router();

router.use((req,res,next) => {
    console.log("Trades API called");
    next();
})

router.delete('/', handler.deleteAllTrades);
router.post('/', handler.insertTrades);
router.get('/', handler.getListTrades);
router.get('/users/:userID', handler.getUserTrdes);

module.exports = router;
