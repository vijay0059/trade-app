const express = require('express');
const handler = require('./handler');
const router = express.Router();

router.use((req,res,next) => {
    console.log("Stocks API called");
    next();
})

router.get('/:stockSymbol/trades', handler.getAllStocks);
router.get('/:stockSymbol/price', handler.getMinAndMaxStocks);

module.exports = router;
