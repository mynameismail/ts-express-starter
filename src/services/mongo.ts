import mongoose from 'mongoose';

export async function init() {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/cumacuma';
    await mongoose.connect(uri).catch(err => console.log(err));
}
