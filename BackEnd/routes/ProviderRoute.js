const express = require('express')
const router = express.Router()
const UserModel = require('../models/ProviderInfo')



router.post('/signup', async (req, res) => {
  console.log('Adding new Legal User')
  try {
    // Assuming the request body contains the necessary data for creating a new user
    const userData = req.body;

    // Create a new user using the User model
    const newUser = new UserModel(userData);

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the created user
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  console.log('Getting all Legal Users')
  try {
    // Fetch all users from the database
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:userId', async (req, res) => {
  console.log('Getting all user by id')
  try {
    const userId = req.params.userId;

    // Find the user by ID in the database
    const user = await UserModel.findById(userId);

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
