const mongoose = required("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderId:{
        type: Number,
        required: true
    },
    orderItemId:{
        type: Number,
        required: true
    },
    subItem:{
        type: String,
        required: true
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
    hasMore:{
        type: Boolean,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    
    FSN:{
        required: true
    },
    
    serialNumbers:{
        type: Number,
        required: true
    },
    

})

module.exports = mongoose.model('order', orderSchema)
