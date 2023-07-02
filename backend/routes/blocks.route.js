import express from 'express';
import {
    getBlocks,
    editBlocks,
    addBlock,
    deleteBlock
} from '../controllers/blocks.controller.js';
import auth from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.get('/', getBlocks)
userRouter.put('/',auth, editBlocks)
userRouter.post('/', addBlock)
userRouter.delete('/', auth,deleteBlock)

export default userRouter;