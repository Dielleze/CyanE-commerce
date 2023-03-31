const { createProduct } = require('e-commerce-server/validators/create');
const { updateProduct} = require('e-commerce-server/validators/update');

const productsModel = require ('../models/productsModel')
import { StatusCodes, ReasonPhrases} from 'http-status-codes'

const controller = {
    list: async(req,res)=>{
        const list = await productsModel.find();
        return res.json(list);
    },
    find:async(req,res)=>{
        try {
            const products = await productsModel.findOne({ _id: req.params.id});
            if(!products) throw Error("PRoduct not found");
            return res.json(products);
        } catch (
            error
        ) {
            res.status(404).json({ error: error.message})        
        }
    },
    post: async (req,res)=>{
        const validateResult = createProduct.validate(req.body)
        if(validateResult.error){
            return res.status(StatusCodes.UNAUTHORIZED)
            .json({ message: ReasonPhrases.UNAUTHORIZED,
                     error: validateResult.error.message})
        }
        const newProduct = new productsModel(req.body);
        
        try{
            await newProduct.save()
            return res.json(newProduct)
        } catch(err){
            return res.json(StatusCodes.UNAUTHORIZED)
            .json({ message: ReasonPhrases.UNAUTHORIZED,
                    error: validateResult.error.message})
        }
    },
    update: async(req, res)=>{
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
    },
    delete:  async(req,res)=>{
        const productid = req.params.id;
        try {
            await productsModel.deleteOne({ _id: productid})
        } catch (error) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND });
        }
    }
}

export default controller;