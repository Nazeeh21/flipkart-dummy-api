const router = require('express').Router()

const Listing = require('../models/listing')

const validateListing = require('../utility/validate').validateListing

// @type    POST/listings
// @desc    To post new listing
// @access  Public
router.route('/').post(async(req, res) => {
    //console.log(req)

    const newListing = new Listing({
        ...req.body
    })

    // console.log(newListing)

    // TODO: Validation

    const validatedObject = await validateListing(newListing)

    if(validatedObject.status === 'Failure') {
        return res.status(400).json({status: 'Failure', reason: validatedObject.reason})
    }

    console.log('exec')
    newListing.save()
        .then(listing => res.json({listing}))
        .catch(e => res.status(400).json({msg: 'Error.', code: e.code, error: e.errMsg}))
})

// @type    POST/listings/update/:sku
// @desc    To update a listing using skuID
// @access  Public
router.route('/update/:sku').post(async(req, res) => {
    //TODO: Validate req params
    skuId = req.params.sku

    let filter = {skuId}
    
    //TODO: Validate req body
    let update = { ...req.body }

    let listing = await Listing.findOneAndUpdate(filter, update, {
        new: true
    })

    if(!listing) {
        return res.status(400).json({status: 'Failure', reason: 'Invalid skuId'})
    } else {
        const validatedObject = await validateListing(listing)

        if(validatedObject.status === 'Failure') {
            return res.status(400).json({status: 'Failure', reason: validatedObject.reason})
        }


        listing.save()
            .then(listing => {
                return res.json({status: 'Success', ...listing})
            })
            .catch(e => {
                return res.status(500).json({status: 'Failure', reason: 'Server-side error.'})
            })
    }
})

// @type    GET/listings/{:sku}
// @desc    Retrieve the information listed against the provided SKU Id
// @access  Public
router.route('/:sku').get(async(req, res) => {
    const skuId = req.params.sku

    let filter = { skuId }

    
})

module.exports = router