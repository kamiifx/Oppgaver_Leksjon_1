const mongoose = require('mongoose')
//require('../models/poll.js')
const ErrorHandler = require('../utils/errorHandler.js')
const catchAsyncErrors = require('../middleware/catchAsync.js')
const pollService = require('../services/poll.js')

const Polls = mongoose.model('polls');


const list = catchAsyncErrors(async (req,res,next) => {
    const result = await pollService.listPolls();
    res.status(200).json(result)
});

const get = catchAsyncErrors(async (req,res,next) => {
   const poll = await pollService.getPollById(req.params.id)
    if (!poll){
        return next(new ErrorHandler(`Finner ikke denne pollen : ${req.params.id}`,404))
    }
    return res.status(200).json(poll);
});

const create = catchAsyncErrors(async (req,res,next) => {
    try {
        const poll = await pollService.createPoll(req.body);
        return res.status(201).json(poll)
    }catch (error){
        return res.status(400).json({error:"Error in creating"})
    }
});

const remove = catchAsyncErrors(async (req,res,next) => {
    let poll = await pollService.getPollById(req.params.id);
    if (!poll){
        return next(
            new ErrorHandler(`Finner ikke poll med : ${req.params.id}`)
        );
    }
    poll = await pollService.removePoll(req.params.id);
    res.status(204).json({});
})

module.exports = {
    list,
    get,
    create,
    remove
}