import mongoose from 'mongoose';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';


export const getUser = async (req, res) => {
    await User.find({})
        .then((singleUser) => {
            res.status(200).json({
                success: true,
                message: 'Single User',
                User: singleUser,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'This user does not exist',
                error: err.message,
            });
        });
};

export const editUser = async (req, res) => {
    const userId = req.body.id;
    console.log(userId)
    await User.findByIdAndUpdate(
        userId,
        {
            name: req.body.name,
            surname: req.body.surname,
            photo: req.body.photo,
            age: req.body.age,
            description: req.body.description,
            email: req.body.email,
            github: req.body.github,
            linkedIn: req.body.linkedIn, 
        },
        { new: true }
    )
        .then((user) => {
            res.status(200).json({
                success: true,
                message: 'User is updated',
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
            });
        });
};