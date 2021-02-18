import express from 'express';
import UserModel from './User';

const user1 = new UserModel({
    id: '123',
    usernam: 'jondoe',
    email: 'jondo@email.com',
    role: 'admin',
});

const user2 = new UserModel({
    id: '345',
    username: 'janedoe',
    email: 'janedoe@email.com',
    role: 'customer',
});

const users = [user1.getData(), user2.getData()];
console.log(users);



const app = express();
const port = 8055;

//test

app.get('/ping', (req,res)=> res.send('pong'));

app.get('/heartbeat', (req,res)=> res.send({datetime: new Date().toJSON()}));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

//middleware in Express