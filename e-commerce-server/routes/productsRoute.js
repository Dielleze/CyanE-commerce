const { async } = require('@firebase/util');
const { default: createProduct } = require('e-commerce-server/validators/create');
const express = require('express');
const productsModel = require ('../models/productsModel')

const productRouter = express.Router({ mergeParams: true});

productRouter.get('/', async(req,res)=>{
    const list = await productsModel.find();
    return res.json(list);
})

productRouter.get('/:id', async(req,res)=>{
    try {
        const products = await productsModel.findOne({ _id: req.params.id});
        if(!products) throw Error("PRoduct not found");
        return res.json(products);
    } catch (
        error
    ) {
        res.status(404).json({ error: error.message})        
    }
})

productRouter.post('/', async (req,res)=>{
    const validateResult = createProduct.validate(req.body)
    const newProduct = new productsModel(req.body);
    
    const result = await newProduct.save()
    console.log(result);

    return res.json(newProduct);
})

productRouter.put('/:id', async(req, res)=>{
    await productsModel.updateOne({_id: req.params.id}, req.body);
    const updatedPRoduct = await productsModel.find({_id: req.params.id});
    return res.json(updatedPRoduct);
})

productRouter.delete(':/id', async(req,res)=>{
    const productid = req.params.id;
    try {
        await productsModel.deleteOne({ _id: productid})
    } catch (error) {
        res.status(404).json();
    }
})