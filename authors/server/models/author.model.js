const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name required."],
        minLength: [3, "First name must be 3 or more characters long."]
    },
    lastName: {
        type: String,
        required: [true, "Last name required."],
        minLength: [3, "Last name must be 3 or more characters long."]
    }
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);