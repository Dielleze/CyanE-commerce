const express = require('express')

const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`The server is listening in port ${port}`)
})