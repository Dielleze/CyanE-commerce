const Joi = require('joi')

const createProduct = Joi.object({
    title: Joi.string().required().min(5).max(250),
    description: Joi.string().allow(null)
})

export default createProduct;