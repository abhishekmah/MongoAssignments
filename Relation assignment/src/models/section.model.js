const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("section", sectionSchema)