const mongoose = require('mongoose');
require('../models/user.js');
require('../models/poll.js');

const Users = mongoose.model('users');
const Poll = mongoose.model('polls');


const getUserById = async (id) => Users.findById(id);

const listAllUsers = async () => Users.find();
const listAllUserPolls = async (id) => {
    if (id){
        const polls = await Poll.find({user: id}).populate('user','email');
        return polls;
    }
}

const createUser = async (data) => Users.create(data);




module.exports = {
    getUserById,
    listAllUsers,
    createUser,
    listAllUserPolls
};
