const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    name: {type: String, trim: true},
    createdDate: {type: Date, default: Date.now},
    categoryId:{type: mongoose.Schema.Types.ObjectId, ref: 'category'}
});

module.exports = mongoose.model('Section', SectionSchema);