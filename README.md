# flipkart-dummy-api

To test the API,

`git clone http://github.com/Nazeeh2000/flipkart-dummy-api.git`

`npm install`

`node server.js`

The server will run on localhost:4000.

(Note: You need to have Mongo installed and running to be able to successfully test the API.)

## Available routes

1. POST **/listings**
2. POST **/listings/update/:skuId**
3. POST **/listings/update/price**
4. POST **/listings/update/inventory**
5. GET **/listings/:skuId**

For more detailed documentation, refer to the `listings.js` file in `routes/` directory.
