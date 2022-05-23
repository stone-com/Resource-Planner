//User Authentication Model
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    //user ID is set to default mongo ids
    //user Name is the user's name
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    customerId:{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }

},{
    toJSON: {
        getters: true,
        virtuals: true,
    }
})

const User = model ('User', userSchema);

module.exports = User;