const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeasurementSchema = new Schema({
    name: {type: String, trim: true},
    createdDate: {type: Date, default: Date.now},
    productId:{type: mongoose.Schema.Types.ObjectId, ref: 'product'},
    sizename: {type: String, trim: true},
    size:{type:String}
});

module.exports = mongoose.model('MeasurementSchema', MeasurementSchema);