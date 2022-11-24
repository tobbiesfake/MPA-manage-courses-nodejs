import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Success!');
    } catch (err) {
        res.status(400).json({ err: 'test error message' });
        console.log('Faillll!');
    }
}

export default { connect };
