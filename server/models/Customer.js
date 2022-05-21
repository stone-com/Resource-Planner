//Customer Model where each user is associated with a specific customer and there are many customers
const {Schema, model} = require ('mongoose')


const customerSchema = new Schema ({
    customerId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    customerName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    }
})

const Customer = model('Customer', customerSchema);

module.exports = Customer;