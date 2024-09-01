import mongoose from 'mongoose';

const DBConnection = async () => {
    const DB_URL = 'mongodb+srv://deenbandhusingh335:tQvcdOAfMhPdzGdf@cluster0.a2ovv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
};

export default DBConnection;
