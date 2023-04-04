require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const productRouter = require('./routes/productsRoute')


mongoose.connect(`${process.env.MONGO_CONNECTION_UTI}/${process.env.MONGO_DB_NAME}`).then(()=>{
    console.log("Conected to db");
    app.use(cors({
        origin: '*',
    }))
    
    app.use(express.urlencoded({ extended: true}))
    app.use(express.json())

    app.use('/products', productRouter);
    
    app.get('*', (req,res)=>{
        res.json({success:true});
    })
    
    app.listen(process.env.API_PORT, ()=>{
        console.log(`The server is listening in port ${process.env.API_PORT}`)
    })
})