const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    listingId: {
        type: Number,
        required: true,
        unique: true
    },
    skuId: {
        type: Number,
        required: true,
        unique: true
    },
    mrp: {
        type: Number,
        required: true
    },
    // Selling price - cannot be greater than MRP
    selling_price: {
        type: Number,
        required: true
    },
    // Stock - cannot exceed 25
    stock_count: {
        type: Number,
        required: true
    },
    // Local shipping charge - always a multiple of 10
    local_shipping_charge: {
        type: Number,
        required: true
    },
    // Zonal shipping charge - always a multiple of 10
    zonal_shipping_charge: {
        type: Number,
        required: true
    },
    // National shipping charge - always a multiple of 10
    national_shipping_charge: {
        type: Number,
        required: true
    },
    // Status - ACTIVE or INACTIVE
    listing_status: {
        type: String,
        required: true
    },
    procurement_sla: {
        type: Number,
        required: true
    },
    // Type - REGULAR, EXPRESS, MADE_TO_ORDER, DOMESTIC, and INTERNATIONAL
    procurement_type: {
        type: String,
        required: true
    },
    actual_stock_count: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('listing', listingSchema)