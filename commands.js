#!/usr/bin/env node

const commander = require('commander');
const {prompt} = require('inquirer');
const {
	addUser,
	findUser,
	showAllUsers,
	updateUser,
	removeUser
} = require('./index.js');

// User Queries
const queries = [
	{
		type: 'input',
	    name: 'firstName',
	    message: `User's First Name`
	},
	{
		type: 'input',
	    name: 'lastName',
	    message: `User's Last Name`
	},
	{
		type: 'input',
	    name: 'email',
	    message: `User's Email Address`
	},
	{
		type: 'input',
	    name: 'phone',
	    message: `User's Phone Number`
	}
];

commander
	.version('1.0.0')
	.description('User Information Manager');

// Command for adding a user
commander
	.command('add')
	.description('Add a User')
	.alias('a')
	.action(() => {
		prompt(queries).then(input => addUser(input));
	});

// Command for finding a user
commander
	.command('find <name>')
	.description('Find a User')
	.alias('f')
	.action(name => findUser(name));

// Command for showing all users
commander
	.command('show')
	.description('Show all Users')
	.alias('s')
	.action(() => showAllUsers());


// Command for updating a user
commander
	.command('update <id>')
	.description('Update a User')
	.alias('u')
	.action(id => {
		prompt(queries).then(input => updateUser(id, input));
	});

// Command for removing a user
commander
	.command('remove <id>')
	.description('Remove a User')
	.alias('r')
	.action(id => removeUser(id));

commander.parse(process.argv);