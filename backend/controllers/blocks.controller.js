import mongoose from 'mongoose';
import Block from '../models/block.model.js';


export const getBlocks = async (req, res) => {
    await Block.find({})
        .then((blocks) => {
            res.status(200).json({
                success: true,
                message: 'blocks',
                Block: blocks,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'server error',
                error: err.message,
            });
        });
};

export const editBlocks = async (req, res) => {
    const blockId = req.body.BlockId;
    await Block.findByIdAndUpdate(
        blockId,
        {
            date: req.body.date,
            title: req.body.title,
            description: req.body.description,
            photo: req.body.photo,
            links: req.body.links,
        },
        { new: true }
    )
        .then((user) => {
            res.status(200).json({
                success: true,
                message: 'Block is updated',
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
            });
        });
};

export const addBlock =  async (req, res) => {
    const newBlock = new Block(req.body);
    return newBlock
            .save()
            .then((newBlock) => {
                res.status(201).json({
                    success: true,
                    message: 'New message send!',
                    newBlock: newBlock,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                    error: err.message,
                });
            })
}

export const deleteBlock = async (req, res) => {
    const blockId = req.query.id;
    await Block.findByIdAndRemove(blockId)
        .exec()
        .then(() =>
            res.status(204).json({
                success: true,
            })
        )
        .catch((err) =>
            res.status(500).json({
                success: false,
            })
        );
};
