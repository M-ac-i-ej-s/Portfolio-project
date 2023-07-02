import express from 'express';
import {
    getUser,
    editUser,
} from '../controllers/user.controller.js';
import auth from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.get('/', getUser)
userRouter.put('/',auth, editUser)

export default userRouter;