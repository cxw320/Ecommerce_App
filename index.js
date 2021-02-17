import express from 'express';

const app = express();
const port = 8055;

//test

app.get('/ping', (req,res)=> res.send('pong'));

app.get('/heartbeat', (req,res)=> res.send({datetime: new Date().toJSON()}));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

