const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    productList:[{
        productId:{type: mongoose.Schema.Types.ObjectId, ref: 'product'},
        measurements:[{
            name:{type:String},
            sizename:{type:String},
            size:{type:String}
        }],
        createdFor:{type:String},
        address:{ type: String },
    }],
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    mobile:{ type: String },
    createdDate:{type:String}
});

module.exports = mongoose.model('order', OrdersSchema);