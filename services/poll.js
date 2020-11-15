const mongoose = require('mongoose');
require('../models/poll.js')
const Polls = mongoose.model('polls');


const getPollById = async (id) => Polls.findById(id);
const listPolls = async () => Polls.find().populate('user','email');
const createPoll = async (data) => Polls.create(data);
const removePoll = async (id) => {
    const poll = await Polls.findById(id);
    poll.remove();
}
const update = async (id, data) => {
    Polls.findByIdAndUpdate(id,data,{
        new:true,
        runValidator:true,
        useFindAndModify:false,
    });
}


module.exports = {
    getPollById,
    listPolls,
    createPoll,
    removePoll,
    update
}