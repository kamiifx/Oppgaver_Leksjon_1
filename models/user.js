import mongoose from 'mongoose';
import slugify from "slugify";

const {Schema} = mongoose;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    slug:String,
},{timestamps:true});


export default mongoose.model("Users",UserSchema);