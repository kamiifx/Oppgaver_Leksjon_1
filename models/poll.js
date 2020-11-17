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
    answerOneVal:{
        type:Number,
        default:0,
    },
    answerTwoVal:{
        type:Number,
        default:0,
    },
    user:{
        type:Schema.Types.ObjectID,
        ref:'users',
        required:true,
    }
},{timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals: true}});


mongoose.model("polls",PollSchema);

