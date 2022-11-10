import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authorRoutes from './routers/author.js'
import userRoutes from './routers/User.js'
import hotelRoutes from './routers/Hotels.js'
import roomRoutes from './routers/room.js'



// Tao PORT backend
const app = express()
dotenv.config();

//Ham connect 
const connect = async () => {
    try {
    await mongoose.connect(process.env.URI);
    console.log('Connected DB');
    }
    catch(error) {
        throw error;
    }
}

app.use(express.json());
app.use('/api/author', authorRoutes);
app.use('/api/users', userRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/room', roomRoutes);

app.listen(3000, () => {
    connect();
    console.log('Connected');
});