const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = Schema({
    email:{
        type:String,
        required:true
    },
},{timestamps:true});

mongoose.model("users",UserSchema);