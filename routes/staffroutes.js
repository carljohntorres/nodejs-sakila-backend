const express = require('express');
const router = express.Router();
const staff = require('../controller/staffcontroller');

router.get("/staff", staff.getAll);

router.get("/staff/:staff_id", staff.getById);

// post for email confirmation
router.post("/staff", staff.getByUsername);

module.exports = router;