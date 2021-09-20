const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    roll_id: { type: Number, required: true },
    current_batch: { type: String, required: true },
    marks: { type: Number, required: true },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    },
    evaluationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true
    },

}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('student', studentSchema)