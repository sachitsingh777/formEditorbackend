const mongoose = require('mongoose');


const FormSchema = new mongoose.Schema({
    mainTitle: { type: String, required: true },
    uniqueId:{ type:String, required: true },
    formQuestions:{ type: Array, required: true }
},
 {
    versionKey: false
}
);

const FormModel = mongoose.model('Form', FormSchema);

module.exports = { FormModel }