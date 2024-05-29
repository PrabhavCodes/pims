
import express from 'express';
import mongoose from 'mongoose';
import getAllUsers from './services/service.js';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect("mongodb://localhost:27017/pims")
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => console.error('Could not connect to MongoDB', err));

const app = express();

app.use(cors({
    origin:'http://127.0.0.1:5500'
}))

app.get('/users', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.send(JSON.stringify(users));
        
    } catch (err) {
        res.status(500).send("Server error: " + err.message);
    }
});

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../CompanyPage/Company.html');
    res.sendFile(filePath);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
