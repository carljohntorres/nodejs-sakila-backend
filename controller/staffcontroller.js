const staffservice = require('../service/staffservice');

// Retrieve all Staff
exports.getAll = (req, res) => {
    staffservice.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || "Some error occurred while retrieving staff."
            });
        } 

        res.send(data);
        
    });
}

// Retrieve Staff by Id
exports.getById = (req, res) => {

    staffservice.getById(
        req.params.staff_id,
        (err, data) => {

            if (err) {
                if (err.flag === 'not_found') {
                    res.status(404).send({
                        message: `Staff not found with id ${req.params.staff_id}.`
                    });
                } else {
                    res.status(500).send({
                        message : err.message || "Some error occurred while retrieving staff."
                    });
                }
                return;
            }

            res.send(data);
        });
}

// Retrieve Staff by credentials
exports.getByUsername = (req, res) => {
   
    if (!req.body) {
        res.status(401).send({
            message : "Unauthorized access"
        })
    }

    res.send(`your email is ${req.body.email}`);
   
    // staffservice.getById(
    //     req.params.staff_id,
    //     (err, data) => {
    //         if (err.flag === 'not_found') {
    //             res.status(404).send({
    //                 message: `Not found Staff with id ${req.params.staff_id}.`
    //             });
    //         } else {
    //             res.status(500).send({
    //                 message : err.message || "Some error occurred while retrieving staff."
    //             });
    //         }

    //         res.send(data);

    //     });
}

module.exports = exports;