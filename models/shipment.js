const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shipmentSchema = new Schema({
    shipmentId: {
        type: String,
        required: true,
        unique: true
    },
    orderItems: {
        type: Array,
        required: true
    },
    locationId: {
        type: String,
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
    //TODO: Packed, ??
    status: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('shipment', shipmentSchema)