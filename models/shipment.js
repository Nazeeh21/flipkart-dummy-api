const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shipmentSchema = new Schema({
    shipmentId: {
        type: Number,
        required: true,
        unique: true
    },
    orderItems: {
        type: Array,
        required: true
    },
    locationId: {
        type: Number,
        required: true
    },
    dispatchByDate:{
        type: Date,
        required: true
    },
    forms: {
        type: Array,
        required: true
    },
    subShipments: {
        type: Array,
        required: false
    },
    timestamp: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: false
    },
    hold: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('shipment', shipmentSchema)