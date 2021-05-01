const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, trim: true},
    createdDate: {type: Date, default: Date.now},
    sectionId:{type: mongoose.Schema.Types.ObjectId, ref: 'section'},
    measurements:[{
        name:{type:String},
        sizename:{type:String},
        size:{type:String}
    }],
    img:{type:String,trim: true},
    price:{type:Number}
});

module.exports = mongoose.model('Product', ProductSchema);