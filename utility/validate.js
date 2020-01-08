module.exports = {
    validateListing: (listing) => {
        // TODO: Validation

        // Returns an object with a status and a reason

        // Verify selling amount
        if(listing.selling_price > listing.mrp) {
            return {status: 'Failure', reason: 'Selling price cannot be greater than MRP.'}
        }

        // Verify stock
        if(listing.stock_count > 25) {
            return {status: 'Failure', reason: 'Stock count cannot be greater than 25.'}
        }

        // Verify shipping charge
        if((listing.local_shipping_charge%10 !== 0) || (listing.zonal_shipping_charge%10 !== 0) || (listing.national_shipping_charge%10 !== 0)) {
            return {status: 'Failure', reason: 'Shipping charge must be a multiple of 10.'}
        }

        // Verify listing status
        if(listing.listing_status!=='ACTIVE' && listing.listing_status!=='INACTIVE') {
            return {status: 'Failure', reason: 'Invalid status.'}
        }

        // Verify procurement type
        if(listing.procurement_type!=='REGULAR'
            && listing.procurement_type!=='EXPRESS'
            && listing.procurement_type!=='MADE_TO_ORDER'
            && listing.procurement_type!=='DOMESTIC'
            && listing.procurement_type!=='INTERNATIONAL') 
        {
            return {status: 'Failure', reason: 'Invalid procurement type.'}
        }

        return {status: 'Success'}
    }, 
    
    validateUpdateReqBody: (req) => {
        // Validates the request body for listing update request


    }
}