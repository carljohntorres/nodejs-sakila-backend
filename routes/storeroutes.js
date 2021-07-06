const express = require('express');
const router = express.Router();
// const staff = require('../controller/staffcontroller');

router.get("/store", (req, res) => {
    console.log('call store');
    res.send("test store");
});

//router.get("/staff/:staff_id", staff.getById);

router.get("/store/:storeid", (req, res) => {

    console.log(`req.params.storeid : ${req.params.storeid}`);
    res.send(`req.params.storeid : ${req.params.storeid}`);
});



module.exports = router;