import mongoose from 'mongoose';
const {Schema} = mongoose; // had to import as a CommonJS module
import {users} from './data.js';
//const {users} = usersModule;
import {products} from './data.js';
//const {products} = productsModule;
import {UserModel} from '../models/user.js';
//const {UserModel} = UserModelModule;

import {ProductModel} from '../models/Product.js';
//const {ProductModel} = ProductModelModule;

// schemas allow us to define structure of the data, must defint the type, the id automatically gets created by mongo
/*
const UserSchema = new Schema ({
    email: String,
    username: String,
    role: String,
});

// we will beind this schema to a model called user

const UserModel = mongoose.model('User', UserSchema);
*/

mongoose.connect('mongodb+srv://dbUser:dbUser@clustercw.bdotq.mongodb.net/Mern_Practice?retryWrites=true&w=majority');
const db = mongoose.connection;

// log in case something goes wrong
db.on('error', (error) =>{
    console.log(error);
});


// logs to console if the database connection is open
db.once('open', ()=>{
    console.log('Database connection is open!');
    //in our open callback, we can create a new user model
    UserModel.insertMany(users,(error)=>{
        if (error){
            console.error(error);
        }
    });

    ProductModel.insertMany(products, (error)=>{
        if(error){
            console.error(error);
        }
    });

});

