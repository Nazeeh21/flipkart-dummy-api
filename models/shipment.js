const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shipmentSchema = new Schema({
    shipmentId: {
        type: Number,
        required: true,
        unique: true
    },
    orderItems: {
        type: Object,
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
        type: Object,
        required: true
    },
    subShipments: {
        type: Object,
        required: false
    }
})

module.exports = mongoose.model('shipment', shipmentSchema)