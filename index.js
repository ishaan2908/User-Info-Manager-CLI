const mongoose = require('mongoose');

// It creates the Database automatically.
const connector = mongoose.connect('mongodb://localhost:27017/usercli', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false 
});

// Importing the User Information
const User = require('./user.js');

// Adding a User
const addUser = user => {
	User.create(user).then(user => {
		console.info('New User Added');
  		mongoose.disconnect();
	});
}

// Finding a User
const findUser = name => {
	const searchUser = RegExp(name, 'i'); // Case Insensitive
	// $or matches either of the condition
	User.find({$or: [{firstName: searchUser}, {lastName: searchUser}]}) // returns a Promise
		.then(user => {
			console.info(user);
			console.info(`${user.length} matches`); // e.g. '1 matches' or '2 matches' etc.
  			mongoose.disconnect();
		});
}

// Showing all Users
const showAllUsers = () => {
	User.find()
		.then(users => {
			console.info(users);
			console.info(`Total ${users.length} users`);
			mongoose.disconnect();
		});
}

// Updating a User
const updateUser = (id, user) => {
	User.findByIdAndUpdate(id, user)
		.then(user => {
			console.info('User Updated');
			mongoose.disconnect();
		});
}

// Removing a User
const removeUser = id => {
	User.deleteOne({id})
		.then(user => {
			console.info('User Removed');
			mongoose.disconnect();
		});
}

module.exports = {
	 addUser,
	 findUser,
	 showAllUsers,
	 updateUser,
	 removeUser
}