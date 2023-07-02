import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const BlockSchema = new mongoose.Schema(
    {
        date: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        links: { type: String, required: false },
    }
);

export default mongoose.model('Block', BlockSchema);