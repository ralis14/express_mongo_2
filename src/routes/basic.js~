'use strict'

let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.route('/')
  .get(function(req, res){
	  res.render('index');
  });
router.route('/register')
  .get(function(req, res){
	  res.render('register');
  });

router.route('/login')
  .get(function(req, res){
	  res.render('login');
  });


module.exports = router;
