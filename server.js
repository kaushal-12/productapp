const express = require('express');
const app = express();
const  bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/product3Detail',{ useNewUrlParser: true},(err,res)=>{
    if (err) throw err
    else{
        console.log('connected successfully');
    }
    
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/product',require('./product/product.routes'))

app.get('/', (req, res) => {
    res.json({"message": "Welcome to  Product app"});
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});   