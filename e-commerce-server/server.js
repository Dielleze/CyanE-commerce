const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:8080/',
}))

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
const port = 3000;

app.get('*', (req,res)=>{
    res.json({success:true});
})

app.listen(port, ()=>{
    console.log(`The server is listening in port ${port}`)
})