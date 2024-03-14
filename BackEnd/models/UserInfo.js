const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact_information: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  address: {
    type: String,
  },
});

const UserModel = mongoose.model('regularuser', userSchema);

module.exports = UserModel;
