const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndustrySchema = new Schema({
    name: {type: String, trim: true},
    img:{type:String,trim: true},
    createdDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Industries', IndustrySchema);