import express from 'express';
import userRoutes from './routes/user.js'
import connectDatabase from "./config/db.js";


const app = express();



app.use("/",userRoutes);







connectDatabase();
const PORT = process.env.PORT || 5000;
app.listen(PORT)
