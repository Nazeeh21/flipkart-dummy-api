const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderID:{
        type: Number,
        required: true,
        unique: true
    },
    orderItemId:{
        type: Number,
        required: true
    },
    subItem:{
        type: String,
        required: false
    },
    orderDate:{
        type: Date,
        required: true
    },
    dispatchByDate:{
        type: Date,
        required: true
    },
    states:{
        type: String,
        required: true
    },
    sku:{
        type: Number,
        required: true
    },
    FSN:{
        type: Number,
        required: true
    },
    serialNumbers:{
        type: Number,
        required: false
    },
    paymentType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('order', orderSchema)
