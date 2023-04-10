const { createProduct } = require('../validators/create');
const { updateProduct} = require('../validators/update');

const productsModel = require ('../models/productsModel')
const { StatusCodes, ReasonPhrases} = require('http-status-codes')

async function listofProduct(req,res){
    const list = await productsModel.find();
    return res.json(list);
}

async function findProductbyId(req,res) {
    try {
        const products = await productsModel.findOne({ _id: req.params.id});
        if(!products) throw Error("PRoduct not found");
        return res.json(products);
    } catch (
        error
    ) {
        res.status(404).json({ error: error.message})        
    }
}

async function createProducts(req,res){
    // const validateResult = createProduct.validate(req.body)
    // if(validateResult.error){
    //     return res.status(StatusCodes.UNAUTHORIZED)
    //         .json({ message: ReasonPhrases.UNAUTHORIZED,
    //          error: validateResult.error.message})
    // }
    // ;
    
    try{
        console.log(req.body)
        const newProduct = new productsModel(req.body);
        console.log(newProduct)
        await newProduct.save()
        console.log(req.body)
        return res.json(newProduct)
    } catch(err){
        return res.json(err)
    }
}

async function updateProducts(req, res){
    const validateResult = updateProduct.validate(req.body)

    if(validateResult.error){
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: ReasonPhrases.UNAUTHORIZED, error: validateResult.error.message})
    }

    try{
        await productsModel.updateOne({_id: req.params.id}, req.body);
        const updatedPRoduct = await productsModel.find({_id: req.params.id});
        return res.json(updatedPRoduct);
    }catch(err){
        return res.json(StatusCodes.UNAUTHORIZED)
        .json({ message: ReasonPhrases.UNAUTHORIZED,
        error: validateResult.error.message})
    }
}
async function deleteProduct(req,res){
    const productid = req.params.id;
    try {
        await productsModel.deleteOne({ _id: productid})
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND });
    }
}

module.exports = {
    listofProduct,
    findProductbyId,
    createProducts,
    updateProducts,
    deleteProduct
}