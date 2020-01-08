const router = require('express').Router()
const Order = require('../models/order')

// @type    POST/shipment-created
// @desc    To handle a notification for a new shipment/order
// @access  Public
router.route('/shipment-created').post(async(req, res) => {
    
})

module.exports = router