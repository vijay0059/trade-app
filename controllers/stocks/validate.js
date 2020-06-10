const Joi = require('@hapi/joi');

exports.validateAllStocks = data => {
    const schema = Joi.object({
        stockSymbol:Joi.string().valid('AC').required().error(() => "Invalied Stock Symbol"),
        type:Joi.string().required().error(() => "Type is Mandatory"),
        start:Joi.date().required().error(() => "Start Date is Mandatory"),
        end:Joi.date().required().error(() => "End Date is Mandatory")
    });
    return Joi.validate(data,schema);
}

exports.validateDateRangeStocks = data => {
    const schema = Joi.object({
        stockSymbol:Joi.string().valid('AC').required().error(() => "Invalied Stock Symbol"),
        start:Joi.date().required().error(() => "Start Date is Mandatory"),
        end:Joi.date().required().error(() => "End Date is Mandatory")
    });
    return Joi.validate(data,schema);
}