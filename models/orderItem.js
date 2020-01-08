const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    orderItemId: {
        type: Number,
        required: true,
        unique: true
    },
    listingId: {
        type: Number,
        required: true,
        unique: true
    },
    cancellationGroupId: {
        type: Number,
        required: true,
        unique: true
    },
    isReplacement: {
        type: Boolean,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    shippingCharge: {
        type: Number,
        required: true
    },
    // Selling price - discount
    customerPrice: {
        type: Number,
        required: true
    },
    // customer price + shipping charge
    totalPrice: {
        type: Number,
        required: true
    },
    emi: {
        type: Number,
        required: true
    },
    flipkartDiscount: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    cancellationDate: {
        type: Date,
        required: false
    },
    cancellationReason: {
        type: String,
        required: false
    },
    courierReturn: {
        type: Boolean,
        required: false
    },
    // Possible values:APPROVED, PACKING_IN_PROGRESS, PACKED, READY_TO_DISPATCH, PICKUP_COMPLETE, CANCELLED, SHIPPED, DELIVERED, RETURN_REQUESTED, RETURNED
    status: {
        type: String,
        required: true
    },
    packageIds: {
        type: Array,
        required: true
    }
})

module.exports = orderItemSchema