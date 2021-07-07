const express = require('express');
const router = express.Router();
const staff = require('../controller/authcontroller');

// post for email confirmation
router.post("/login/u", staff.getByUsername);

// post for password if credentials is correct
router.post("/login/p", staff.getByUsername);

module.exports = router;