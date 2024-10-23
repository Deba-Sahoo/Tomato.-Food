import mongoose from 'mongoose';

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://debasahoo971:Deba2001@cluster0.jwxkmqg.mongodb.net/food-del').then(() => console.log("DB Connected"));
}