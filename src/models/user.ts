import mongoose, { Schema } from 'mongoose';

interface UserAttributes {
    username: string;
    phone: string;
}

const schema = new Schema<UserAttributes>({
    username: String,
    phone: String
});

export const User = mongoose.model<UserAttributes>('User', schema);
