const express = require('express');
const mongoose = require('mongoose');
const User = require('./users');

const app = express();
const port = 3000; // or any other port you prefer

// Connect to MongoDB
mongoose.connect('mongodb+srv://mongo:Aa123456@cluster0.qaa5sqy.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after successful database connection
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
    });

const userData = {
    id: 123123,
    first_name: 'moshe',
    last_name: 'israeli',
    birthday: 'January, 10th, 1990'
};

const User = require('./models/user'); // Assuming you have a User model defined

async function checkOrCreateUser(userId, firstName, lastName, birthday) {
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ id: userId });

        if (existingUser) {
            console.log('User already exists');
            return true;
        }

        // Create a new user
        const newUser = new User({
            id: userId,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday
        });

        await newUser.save();
        console.log('New user created');
        return false;
    } catch (error) {
        console.error('Error checking or creating user:', error);
        return false;
    }
}
