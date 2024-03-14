// Assuming this code is in a file named serviceRequestRoutes.js

const express = require('express');
const router = express.Router();
const ServiceRequestModel = require('../models/Cases');

// GET route to fetch all service requests
router.get('/', async (req, res) => {
  console.log('Get all Cases')
  try {
    const serviceRequests = await ServiceRequestModel.find().populate('user_information');
    res.status(200).json(serviceRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/add-case', async (req, res) => {
  console.log('Add new Case')
  try {
    // Assuming the request body contains the necessary data for creating a new service request
    const serviceRequestData = req.body;

    // Create a new service request using the ServiceRequestModel
    const newServiceRequest = new ServiceRequestModel(serviceRequestData);

    // Save the new service request to the database
    const savedServiceRequest = await newServiceRequest.save();

    res.status(201).json(savedServiceRequest); // Respond with the created service request
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:userId', async (req, res) => {
  console.log('Getting Case by ID')
  try {
    const userId = req.params.userId;

    // Find the user by ID in the database
    const user = await ServiceRequestModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Case not found' });
    }
  } catch (err) {
    console.log(err)
  };
}
)

router.get('/user-cases/:userId', async (req, res) => {
  console.log('get cases for user');
  try {
    const userId = req.params.userId;

    // Find all service requests with the given userId
    const userCases = await ServiceRequestModel.find({ 'user_information': userId }).populate('user_information');

    res.status(200).json(userCases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
