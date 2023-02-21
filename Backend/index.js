const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('./db/config')
const User = require('./db/User')
const Products = require('./db/Product');

const app = express();
app.use(express.json());
app.use(cors());
app.post('/resister',async(req,resp)=>{
    let user = new User(req.body)
    let result = await user.save()
    resp.send(result)
})
app.post("/login", async (req, resp) => {
    //resp.send(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "No User Found" })
        }
    } else {
        resp.send({ result: "No User Found" })
    }

})

app.post("/add-product",async (req,resp)=>{
    let product = new Products(req.body);
    let result = await product.save();
    resp.send(result)
})

app.get("/products",async (req,resp)=>{
    let product = await Products.find();
    if(product.length>0){
        resp.send(product)
    }else{
        resp.send({result:"No Products found"})
    }
})
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.filename+"-"+Date.now()+".jpg")
        }
    })
}).single('user_file')
app.post('/upload',upload,(req,resp)=>{
    resp.send("file uploaded")
})

app.listen(5000)