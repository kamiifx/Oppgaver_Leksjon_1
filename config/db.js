const mongoose = require('mongoose');


const connectDatabase = async () => {
    let dbConnect;
    try {
        dbConnect = await mongoose.connect("mongodb+srv://web:web123@cluster0.jkj1x.mongodb.net/Leksjon11DB?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true});
    }catch (e){
        console.log(e.message)
    }
    console.log(`Connected to mongoDB: ${dbConnect.connection.host}`)
};

module.exports = connectDatabase;