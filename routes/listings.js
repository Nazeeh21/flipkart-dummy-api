const router = require('express').Router()

const Listing = require('../models/listing')

const validateListing = require('../utility/validate').validateListing

// @type    POST/listings
// @desc    To post new listing
// @access  Public
router.route('/').post((req, res) => {
    //console.log(req)

    const newListing = new Listing({
        ...req.body
    })

    // console.log(newListing)

    // TODO: Validation

    const validateObject = validateListing(newListing)

    if(validateObject.status === 'Failure') {
        return res.status(400).json({status: 'Failure', reason: validateObject.reason})
    }

    console.log('exec')
    newListing.save()
        .then(listing => res.json({listing}))
        .catch(e => res.status(400).json({msg: 'Error.', code: e.code, error: e.errMsg}))
})

router.route('/update/:sku').post(async(req, res) => {
    skuId = req.params.sku

    let filter = {skuId}
    let update = { ...req.body }

    let listing = await Listing.findOneAndUpdate(filter, update, {
        new: true
    })

    if(!listing) {
        return res.status(400).json({status: 'Failure', reason: 'Invalid skuId'})
    } else {
        listing.save()
            .then(listing => {
                return res.json({status: 'Success', ...listing})
            })
            .catch(e => {
                return res.status(500).json({status: 'Failure', reason: 'Server-side error.'})
            })
    }
})

module.exports = router