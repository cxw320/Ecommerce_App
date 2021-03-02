import express from 'express';
var cors =require('cors');
//import users from './mocks/Users.js';
import bodyParser from 'body-parser';
import {UserModel} from './models/User.js';
import {ProductModel} from './models/Product.js';
import db from './db/index.js';






const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = 8055;

app.get('/v1/products', async (req, res) =>{

    // filter component below
    const {categories} = req.query;
    // This is done explicitly because if we do it on an empty string, it does not return an empty array - but an array with an empty string
    // MongoDB will be searching for a blank string category if we leave this as be, so we have to address with a condition
    // If the list of categories is empty, we will provide the $in object - a special keyword in MongoDB language
    // It will tell MongoDB to pull any category from the category list array we provided
    const categoryList = categories ? categories.split(','): [];
    const products = await ProductModel.find(
        categoryList.length > 0 ?
            { categories: {$in: categoryList}} :
            undefined
    ) || [];
    res.send(products);
});

app.get('/v1/products/:id', async (req, res)=>{
    // try catch block to catch if the id is a bad id, if you dont have this the request will hang
    try{
    const product = await ProductModel.findById(req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).end();
    }
    } catch (e){
        res.status(404).end();
    }
});

app.post('/v1/products', async (req, res)=>{
    const product = await ProductModel.create(req.body);
    if(product){
        res.status(200).end;
    }else {
        res.status(500);
    }
});

//Does not return a promise
app.put('/v1/products/:id', (req, res)=>{
    ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err) => {
            if(err){
                res.status(500).end();
            } else{
                res.status(200).end();
            }
        }
    );
});

app.delete('/v1/products/:id', (req, res)=>{
    ProductModel.findByIdAndDelete(
        req.params.id,
        (err) => {
            if(err){
                res.status(500).end();
            } else{
                res.status(200).end();
            }
        }
    );
});


app.get('/v1/users', async (req, res) =>{
    const users = await UserModel.find() || [];
    res.send(users);
});

app.post('/v1/users', (req, res) => {
    //TODO: IMPLEMENT
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    console.log(`post: data => `, username, email, role);
    console.log(req.body);
  //  res.send(users);
});



app.put('/v1/users/:id', (req, res) => {
    //TODO: IMPLEMENT
    const id = req.params.id;
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    console.log(`putt: data => `, id, username, email, role);
    console.log(req.body);
 //   res.send(users);
});


app.get('/v1/users/:id', async (req, res)=>{
    // try catch block to catch if the id is a bad id, if you dont have this the request will hang
    try{
    const user = await UserModel.findById(req.params.id);
    if(user){
        res.send(user);
    } else {
        res.status(404).end();
    }
    } catch (e){
        res.status(404).end();
    }
});

app.delete('/v1/users/:id', (req, res)=>{
    console.log('delete: id =>', req.params.id);
    res.status(200).end();
});

app.get('/ping', (req,res)=> res.send('pong'));

app.get('/heartbeat', (req,res)=> res.send({datetime: new Date().toJSON()}));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

//middleware in Express