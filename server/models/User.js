import mongoose from 'mongoose';
const {Schema} = mongoose; 

export const UserSchema = new Schema ({
    email: String,
    username: String,
    role: String,
});

// we will beind this schema to a model called user

export const UserModel = mongoose.model('User', UserSchema);