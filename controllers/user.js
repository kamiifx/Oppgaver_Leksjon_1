const {userService} = require('../services/index.js')
const mongoose = require('mongoose')
require('../models/user.js')
const ErrorHandler = require('../utils/errorHandler.js')
const catchAsyncErrors = require('../middleware/catchAsync.js')
const Users = mongoose.model('users');


const list = catchAsyncErrors(async (req,res,next)=> {
    const result = await userService.listAllUsers();
    res.status(200).json({...result});
});

const get = catchAsyncErrors(async (req,res,next) => {
    const user = await userService.getUserById(req.params.id)
    if (!user){
        return next(new ErrorHandler(`Finner ikke denne brukeren med : ${req.params.id}`,404));
    }
    return res.status(200).json(user);
});

const create = catchAsyncErrors(async (req,res,next) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json(user);
    }catch (error){
        return res.status(400).json({error:"Error in creating"})
    }
});

const listEvents = catchAsyncErrors(async (req,res,next) => {
    const {id} = req.params;
    const poll = await userService.listAllUserPolls(id)
    res.status(200).json(poll);
})

const remove = catchAsyncErrors(async (req,res,next) => {

});



module.exports = {
     list, get, create, remove, listEvents
};
