const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Use Express JSON
app.use(express.json())

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hackathonLocalDB', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected to MongoDB'))

// Routes
const listingsRouter = require('./routes/listings')
const orderNotificationsRouter = require('./routes/order-notifications')

app.use('/listings', listingsRouter)
app.use('/order-notifications', orderNotificationsRouter)

// Port declaration
let port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server started on port ${port}`))
