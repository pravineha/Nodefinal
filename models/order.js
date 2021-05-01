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
        createdFor:{type:String,default:"self"},
        address:{ type: String,default:"self" },
        quantity:{type:Number,default:1},
        price:{type:Number,default:1},
    }],
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    mobile:{ type: String },
    orderAmount: {type: Number},
    createdDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model('order', OrdersSchema);