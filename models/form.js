const mongoose = require("mongoose")
const Schema = mongoose.Schema

const formSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    automated: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('form', formSchema)