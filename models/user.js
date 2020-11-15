const mongoose = require('mongoose');
const validator = require('validator')
const {Schema} = mongoose;

const UserSchema = Schema({
    email:{
        type:String,
        unique:true,
        validate:[validator.isEmail,'Eposten er ikke gyldig'],
        required:true
    },
},{timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals: true}});

UserSchema.virtual('polls',{
    ref:'polls',
    localField:'_id',
    foreignField:'user',
    justOne:false,
});

mongoose.model("users",UserSchema);