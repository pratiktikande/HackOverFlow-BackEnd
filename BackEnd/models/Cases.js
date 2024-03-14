const mongoose = require('mongoose');
const User = require('./UserInfo')
const serviceRequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    user_information: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'regularuser'
    },
    case_type: {
        type: String,
        required: true,
    },
    document_upload: {
        attached_documents: {
            type: [String], // Array of document filenames
        },
    },
    budget_and_pricing: {
        type: Number,
    },
    privacy_consent_given: {
        type: Boolean,
        required: true,
    },
});

const ServiceRequestModel = mongoose.model('ServiceRequest', serviceRequestSchema);

module.exports = ServiceRequestModel;
