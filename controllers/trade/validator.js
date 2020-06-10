const Joi = require('@hapi/joi');

exports.validateData = data => {
    const schema = Joi.object({
        id:Joi.number().required().error(() => "Invalied Stock Id"),
        type:Joi.string().valid('Buy','Sell').required().error(() => "Type is Mandatory"),
        userId:Joi.number().required().error(() => "User Id is Mandatory"),
        symbol:Joi.string().valid('AC').required().error(() => "Valied Symbol is Mandatory"),
        shares:Joi.number().required().min(10).max(30).error(() => "Share is Mandatory or should be between 10 and 30"),
        price:Joi.number().required().min(130.42).max(192.65).error(() => "Price is Mandatory or should be between 130.42 and 195.65"),
        timestamp:Joi.date().required().error(() => "Timezone is Mandatory")
    });
    return Joi.validate(data,schema);
}