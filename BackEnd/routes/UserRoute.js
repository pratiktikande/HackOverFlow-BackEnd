// Assuming this code is in a file named userRoutes.js

const express = require('express');
const router = express.Router();
// import UserModel, { find, findById } from '../models/UserInfo'; // Assuming your user model is in the 'models' directory
const UserModel = require("../models/UserInfo")

// POST route to create a new user
router.get('/', async (_req, res) => {
  console.log('Getting all Regular User')
  try {
    // Fetch all users from the database
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/signup', async (req, res) => {
  console.log('Adding New User')
  try {
    // Assuming the request body contains the necessary data for creating a new user
    const userData = req.body;

    // Create a new user using the UserModel
    const newUser = new UserModel(userData);

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the created user
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/:userId', async (req, res) => {
  console.log('Getting User by ID')
  try {
    const userId = req.params.userId;

    // Find the user by ID in the database
    const user = await findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router
