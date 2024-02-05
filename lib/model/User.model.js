import mongoose, { Schema, models } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    empid:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Middleware
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

userSchema.methods.confirmPassword = async function (string_password) {
    const isMatch = await bcrypt.compare(string_password, this.password);
    return isMatch;
};

userSchema.methods.updatePassword = async function (string_password) {
    user.password = await bcrypt.hash(string_password, 10);
    return true;
};


const User = models.User || mongoose.model('User', userSchema);

export default User;