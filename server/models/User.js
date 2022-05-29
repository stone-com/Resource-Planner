const bcrypt = require('bcrypt')
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

//before saving the user we check if this is a new user or if it's an existing user. If it's existing we will modify the existing password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model ('User', userSchema);

module.exports = User;