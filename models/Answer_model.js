const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    rollno:{ type: String, required: true },
    uniqueformId:{ type: String, required: true },
    submission:{ type: Array, required: true }
},
    {
        versionKey: false
    }
);

const AnswerModel = mongoose.model('answer', AnswerSchema);

module.exports = { AnswerModel }