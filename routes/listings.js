const router = require('express').Router()

const Listing = require('../models/listing')

// @type    POST
// @desc    To post new listing
// @access  Public
router.route('/').post((req, res) => {

    const newListing = new Listing({
        ...req.body
    })

    // TODO: Validation

    // Verify seller amount
    if(newListing.seller)


    console.log(newListing)

    newListing.save()
        .then(listing => res.json({listing}))
        .catch(e => res.status(400).json({msg: 'Error.', code: e.code, error: e.errMsg}))
})

module.exports = router