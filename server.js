import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
const port = 4000;

const uri = `mongodb+srv://98kithome:98kithome@cluster0.ijx96ju.mongodb.net/`

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

// Middleware to allow CORS
app.use(cors());

app.use(express.json());

// Route to list all routes
app.get("/", (req, res) => {
    
});

app.use('/users', userRoutes);
