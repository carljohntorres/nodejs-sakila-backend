const authservice = require('../service/authservice');

// Retrieve Staff by credentials
exports.getByUsername = (req, res) => {

    if (!req.body) {
        res.status(401).send({
            message: "Unauthorized access"
        })
    }

    authservice.getByCredentials(
        req.body,
        (err, data) => {

            if (err) {
                if (err.flag === 'not_found') {
                    res.status(404).send({
                        message: `Staff not found with email ${req.body.email}.`
                    });
                } else {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving staff."
                    });
                }
                return;
            }

            if (!req.body.checkpass)
                checkdata(data);
            else
                validCredentails(data);

        }
    );

    checkdata = data => {

        res.send({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            active: data.active,
            password_set: data.password_set,
            checkpass: 1
        });

    }

    validCredentails = data => {
        if (data.status === 'invalid_credentails') {
            res.status(401).send({
                message: "Invalid Credentails"
            });
            return;
        }
        res.send(data);
    }

}

module.exports = exports;