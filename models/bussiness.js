//Pravin -- Collection or Table Structure this is where the ORM uses
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BussinessSchema = new Schema({
    name: {type: String, trim: true},
    createdDate: {type: Date, default: Date.now},
    industryId:{type: mongoose.Schema.Types.ObjectId, ref: 'Industries'},
    img:{type:String,trim:true},
    location:{type:String,trim:true},
    phoneNumber:{type:[String],trim:true},
    address1:{type:String,trim:true},
    address2:{type:String,trim:true},
    city:{type:String,trim:true},
    state:{type:String,trim:true},
    country:{type:String,trim:true},
    zipCode:{type:String,trim:true}
});

module.exports = mongoose.model('Bussiness', BussinessSchema); //Pravin - Business is the collection name in MongoDB and BusinessSchema structure of Mongodb
