const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {type: String, trim: true},
    createdDate: {type: Date, default: Date.now},
    bussinessId:{type: mongoose.Schema.Types.ObjectId, ref: 'bussiness'}
});

module.exports = mongoose.model('Category', CategorySchema);