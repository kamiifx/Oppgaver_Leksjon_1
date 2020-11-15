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


module.exports = {
    getPollById,
    listPolls,
    createPoll,
    removePoll
}