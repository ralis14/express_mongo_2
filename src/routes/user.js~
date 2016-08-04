'use strict'

let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.route('/:id')
  .get(User.retrieveUser);

router.route('/:id/update')
  .get(User.updateUser);

router.route('/:id/edit')
  .get(User.editUser);

module.exports = router;
