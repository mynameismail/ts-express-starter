import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: String,
    phone: String
});

export const User = mongoose.model('User', userSchema);
