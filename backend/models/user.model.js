import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, default: 'Maciej'},
        surname: { type: String, default: 'Słupianek' },
        age: { type: Number, default: 21 },
        description: {type: String, default: 'programmer'},
        email: { type: String , default: 'maciej.slupianekge@gmail.com'},
        github: { type: String , default: 'https://github.com/M-ac-i-ej-s'},
        linkedIn: { type: String , default: 'https://www.linkedin.com/in/maciej-s%C5%82upianek-686246237/'},
    }
);

export default mongoose.model('User', UserSchema);