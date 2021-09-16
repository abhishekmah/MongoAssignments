const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },
    check: { type: Boolean, required: false , default: false },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true
    },

}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('book', bookSchema)