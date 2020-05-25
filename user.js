const mongoose = require('mongoose');

// Information of the User
const userInfo = mongoose.Schema({
	firstName: {type : String},
	lastName: {type : String},
	email: {type : String},
	phone: {type : String}
});

module.exports = mongoose.model('User', userInfo);