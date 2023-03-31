const express = require('express');

const productRouter = express.Router({ mergeParams: true});

productRouter.get('/', categoryController.list)

productRouter.get('/:id', categoryController.find )

productRouter.post('/', categoryController.post)

productRouter.put('/:id', categoryController.update)

productRouter.delete(':/id', categoryController.delete)