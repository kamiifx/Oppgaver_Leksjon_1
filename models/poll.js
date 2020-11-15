const mongoose = require('mongoose');
const {Schema} = mongoose;

const PollSchema = Schema({
    questionName:{
        type:String,
        required:true,
    },
    answerOne:{
        type:String,
        required: true,
    },
    answerTwo:{
        type:String,
        required: true,
    },
    user:{
        type:Schema.Types.ObjectID,
        ref:'users',
        required:true
    }
},{timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals: true}});


mongoose.model("polls",PollSchema);

//5faaebde7baa7f452c77f69b
