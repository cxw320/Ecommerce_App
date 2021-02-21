import mongoose from 'mongoose';
const {Schema} = mongoose; // had to import as a CommonJS module

mongoose.connect('mongodb+srv://dbUser:dbUser@clustercw.bdotq.mongodb.net/Mern_Practice?retryWrites=true&w=majority');
const db = mongoose.connection;

// log in case something goes wrong
db.on('error', (error) =>{
    console.log(error);
});


// logs to console if the database connection is open
db.once('open', ()=>{
    console.log('Database connection is open!');
});

export default db;
