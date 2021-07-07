const express = require('express');
const router = express.Router();
const staff = require('../controller/staffcontroller');

// get all
router.get("/staff", staff.getAll);

// get by Id
router.get("/staff/:staff_id", staff.getById);

// router.post("/staff", staff.create);

// router.delete("/staff/:staff_id", staff.deleteById);

router.put("/staff/:staff_id", staff.updateById);

module.exports = router;