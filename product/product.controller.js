const productDetail = require('./product.model.js');

const createProduct =async (req,res)=>{
    const productData = new productDetail({
        productName : req.body.productName,
        productId: req.body.productId,
        productPrice: req.body.productPrice,
        company: req.body.company
        
    });

    productData.save((err,data)=>{
        if(err) throw err;
        else{
            res.send(data);
        }
    })
}

let getproductById = async(req,res)=>{
    console.log(req.params)
    productDetail.find({productId:req.params.id}).then(data => res.status(200).send(data))
    .catch(err => res.status(404)).send(err)
}
let updateProductById = async(req,res)=>{(
    productDetail.findOneAndUpdate({productId :req.params.id},{$set:{productName : req.body.productName,company : req.body.company,productPrice:req.body.productPrice,}},(err,data)=>{
       if(data) res.status(201).send(data)
       else res.status(500).send(err) 
    }))
    }
    let deleteByProductId = async(req,res)=>{
        productDetail.findOneAndDelete({productId:req.params.id}).then(data => res.send({message:'deleted successfuly'})).catch(err => res.send(err))
    }  



module.exports = { createProduct,getproductById,updateProductById,deleteByProductId}