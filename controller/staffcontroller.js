const staffservice = require('../service/staffservice');

// Retrieve all Staff
exports.getAll = (req, res) => {

    staffservice.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving staff."
            });
        }

        res.send(data);

    });
}

// Retrieve Staff by Id
exports.getById = (req, res) => {

    staffservice.getById(
        req.params,
        (err, data) => {

            if (err) {
                if (err.flag === 'not_found') {
                    res.status(404).send({
                        message: `Staff not found with id ${req.params.staff_id}.`
                    });
                } else {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving staff."
                    });
                }
                return;
            }

            res.send(data);
        });
}


exports.updateById = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    staffservice.updateById(
        req.params, // forward parameter
        req.body, // body parameter from form
        (err, data) => {

            if (err) {
                if (err.flag === 'not_found') {
                    res.status(404).send({
                        message: `Staff not found with id ${req.params.staff_id}.`
                    });
                } else {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving staff."
                    });
                }
                return;
            }

            res.send(data);

        }
    )
}

exports.deleteById = (req, res) => {

    staffservice.deleteById(
        req.params,
        (err, data) => {

            if (err) {
                if (err.flag === 'not_found') {
                    res.status(404).send({
                        message: `Staff not found with id ${req.params.staff_id}.`
                    });
                } else {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving staff."
                    });
                }
                return;
            }

            res.send(data);

        }
    )

}

exports.deleteById = (req, res) => {

    staffservice.create(
        req.body,
        (err, data) => {

            if (err) {
                if (err.flag === 'not_found') {
                    res.status(404).send({
                        message: `Staff not found with id ${req.params.staff_id}.`
                    });
                } else {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving staff."
                    });
                }
                return;
            }

            res.send(data);
        }
    )
}



module.exports = exports;