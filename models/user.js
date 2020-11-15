const mongoose = require('mongoose');
const validator = require('validator')
const {Schema} = mongoose;
const jwt = require('jsonwebtoken');

const UserSchema = Schema({
    email:{
        type:String,
        unique:true,
        validate:[validator.isEmail,'Eposten er ikke gyldig'],
        required:true
    },
},{timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals: true}});

UserSchema.methods.getJwtToken = function (){
    return jwt.sign({id: this._id}, 'a3748c5ad8a8cc215d14296edf06ef2b47f7eec7e592910eea0b0b48bdd65820',{expiresIn:'200s'})
}

UserSchema.virtual('polls',{
    ref:'polls',
    localField:'_id',
    foreignField:'user',
    justOne:false,
});

mongoose.model("users",UserSchema);