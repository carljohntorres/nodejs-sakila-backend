const express = require('express');
const router = express.Router();
const staff = require('../controller/staffcontroller');

// get all (SELECT)
router.get("/staff", staff.getAll);

// get by Id (SELECT LIMIT 1)
router.get("/staff/:staff_id", staff.getById);

// create (INSERT)
router.post("/staff", staff.create);

// delete (DELETE)
router.delete("/staff/:staff_id", staff.deleteById);

// update (UPDATE)
router.put("/staff/:staff_id", staff.updateById);

module.exports = router;