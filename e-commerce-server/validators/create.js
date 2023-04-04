const Joi = require('joi')

const updateProduct = Joi.object({
    title: Joi.string().required().min(5).max(250),
    description: Joi.string().allow(null)
})

module.exports = updateProduct;