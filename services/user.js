const mongoose = require('mongoose');
require('../models/user.js')
const Users = mongoose.model('users');



const getUserById = async (id) => Users.findById(id);

const listAllUsers = async () => Users.find();

const createUser = async (data) => Users.create(data);



module.exports = {
    getUserById,
    listAllUsers,
    createUser
};
