const router = require('express').Router()
const Order = require('../models/order')
const Shipment = require('../models/shipment')

// @type    POST/order-notifications
// @desc    To handle any new notifications
// @access  Public
router.route('/').post(async(req, res) => {
    switch(req.body.eventType) {
        case 'shipment_created':
            //TODO: Ensure deep copy of arrays
            const newShipment = new Shipment({
                shipmentId: req.body.shipmentId,
                orderItems: req.body.orderItems,
                locationId: req.body.locationId,
                dispatchByDate: req.body.attributes.dispatchByDate,
                forms: req.body.forms,
                subShipments: req.body.subShipments,
                timestamp: req.body.timestamp,
                updatedAt: req.body.attributes.updatedAt,
                hold: req.body.attributes.hold
            })

            console.log(newShipment)
            break
        default:
            return res.status(400).json({status: 'Failure', reason: 'Bad request'})
    }
})

module.exports = router