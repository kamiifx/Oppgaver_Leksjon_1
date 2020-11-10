const {userService} = require('../services/index.js')
const mongoose = require('mongoose')
require('../models/user.js')
const Users = mongoose.model('users');



module.exports = {
    async list(req,res,next) {
        const result = await userService.listAllUsers();
        res.status(200).json({...result});
    },

    async get(req,res,next) {
        const user = await userService.getUserById(req.params.id)
        if (!user){
            res.status(404).json({error:"Not found"})
        }
        res.status(200).json(user);
    },

    async create(req,res,next){
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        }catch (error){
            res.status(400).json({error:"Error in creating"})
        }
    },

    update(req,res,next) {},

    remove(req,res,next) {},
};
