'use strict'

let mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	password: {
		type: String,
		required: true
	}
});

let User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports.updateUser = function(req, res){
	res.render('../views/user/update', {id: req.params.id});
}

module.exports.retrieveUser = function(req, res){
	res.render('../views/user/index', {id: req.params.id});
}

module.exports.editUser = function(req, res){
	res.render('../views/user/edit', {id: req.params.id});
}
