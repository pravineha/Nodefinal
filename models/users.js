const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {type: String, trim: true},
    createdDate: {type: Date, default: Date.now},
    email:{type:String,  index: true, unique: true,
    required:[true,"email is required"],
    validate:{
        validator:function(email){ 
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        message:props => `${props.value} is not valid email`
    }},
    img:{type:String,trim: true},
    role:{type:Number,default:0},
    mobile:{type:String, trim: true},
    password:{type:String,trim:true,required: [true, ' Password not found']}
});

UsersSchema.pre('save',function(next)  {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    user.password = hashedPassword
    next();
})

const Users = mongoose.model('Users', UsersSchema);
Users.createIndexes();

module.exports = Users;