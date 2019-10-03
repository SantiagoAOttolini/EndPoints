const products = require('../../data/products.json')

const getAll = (req , res ) => {
    res.send({products});
 }
 const getById = (req , res ) => {
     const productFound = productFounds.find(productFound => productFound.id == req.params.id);
     if(productFound == null){
         res.send('product doesn´t exist');
     }
     else{
         res.send(product);
     }
 }

 const insert = (req , res ) => {
     if(req.body.id <= products.length){
        res.send('existin order');
     }
     else{
         products.push(req.body);
         res.send(`added product: ${req.body.id}`);
     }
 }
 const upsert = (req , res ) => {
     const productUp = productUps.find(productUp => productUp.id == req.params.id);
     if(productUp == null) {
         res.send('product doesn`t exist');
     }
     else{
         productUp.splice(productUp.id-1,1,req.body);
         res.send(`product: ${productUp} upsert`);
     }
 }
 const update = (req , res ) => {
     const productUPDT = productUPDTs.find(productUPDT => productUPDT.id == req.params.id);
     if(productUPDT == null){
        res.send('product doesn´t exist');
     }
     else{
         productUPDT[Object.keys(req.body)] = req.body[Object.keys(req.body)];
         res.send(productUPDT);
     }
 }
 const remove =(req , res ) => {
     const productRemove = productRemoves.find(productRemove => productRemove.id == req.params.id);
     if(productRemove == null){
         res.send('product dosn`t exist');
     }
     else{
         productRemove.splice(productRemove.id-1,1);
         res.send(`product: ${req.params.id} remove`);
     }
 }
 
 module.exports =  {
     getAll,
     getById,
     insert,
     upsert,
     update,
     remove
 }