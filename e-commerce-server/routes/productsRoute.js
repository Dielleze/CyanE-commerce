const express = require('express');
const { 
    listofProduct,
    findProductbyId,
    createProducts,
    updateProducts,
    deleteProduct
} = require('../controllers/ProductController')

const productRouter = express.Router();

productRouter.get('/', listofProduct)

productRouter.get('/:id', findProductbyId )

productRouter.post('/', createProducts)

productRouter.put('/:id', updateProducts)

productRouter.delete(':/id', deleteProduct)

module.exports = productRouter;