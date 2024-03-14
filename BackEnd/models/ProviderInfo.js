const mongoose = require('mongoose')

const generalInformationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	password:{
		type:String,
		required:true
	},
	phone: {
		type: String,
	}
});

const contactInformationSchema = new mongoose.Schema({
	website: {
		type: String,
	},
	linkedin: {
		type: String,
	}
});

const userSchema = new mongoose.Schema({

	headerImage: {
		type: String,
	},
	
	generalInformation: generalInformationSchema,
	skills: {
		type: Array,
	},
	notableCases: {
		type: Array,
	},
	education: {
		type: Array,
		required: true
	},
	awardsAndRecognitions: {
		type: Array,
		default: []
	},
	contactInformation: contactInformationSchema,
	created: {
		type: Date,
		required: true,
		default: Date.now
	},

})

module.exports = mongoose.model('legaluser', userSchema)
