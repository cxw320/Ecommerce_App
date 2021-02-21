import mongoose from 'mongoose';
const {Schema} = mongoose; 


export const ProductSchema = new Schema({
    name: String,
    price: Number,
    images: [String],
});

export const ProductModel = mongoose.model('Product', ProductSchema);