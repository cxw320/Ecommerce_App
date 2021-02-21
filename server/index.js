import express from 'express';
//import users from './mocks/Users.js';
import bodyParser from 'body-parser';
import {UserModel} from './models/User.js';
import {ProductModel} from './models/Product.js';
import db from './db/index.js';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = 8055;

app.get('/v1/products', async (req, res) =>{
    const products = await ProductModel.find() || [];
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



app.get('/v1/users', async (req, res) =>{
    const users = await UserModel.find() || [];
    res.send(users);
});

app.post('/v1/users', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    console.log(`post: data => `, username, email, role);
    console.log(req.body);
  //  res.send(users);
});

app.put('/v1/users/:id', (req, res) => {
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