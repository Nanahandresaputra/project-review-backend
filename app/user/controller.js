import User from './model.js';
import fs from 'fs';

export const listUser = async (req, res, next) => {
    try {
        const user = await User.find();
       return res.json(user);
    } catch (err) {
        next(err);
    }
}

export const indexUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        return res.json(user);
    } catch (err) {
        next(err);
    }
}

export const addUser = async (req, res, next) => {
    try {
        let payload = req.body;
       
        if(req.file){
            let fileName = req.file.filename;
            let user = new User({...payload, foto:fileName});
            await user.save();
            return res.json(user);
        }else{
            let user = new User(payload);
            await user.save();
            return res.json(user);
        }
        
    } catch (err) {
        if(err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const payload = req.body;
        
        if(req.file){
            let fileName = req.file.filename;
            let user = await User.findByIdAndUpdate(id, {...payload, foto:fileName});
            return res.json(user);
        }

    } catch (err) {
        next(err);
    }
}