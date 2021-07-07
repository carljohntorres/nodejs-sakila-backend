const Staff = require('../model/Staff');
const sql = require('../private/resource/connection')

Staff.getByCredentials = (staff, result) => {

    let query;
    let values = [];

    // To verify first if email is registered
    if (!staff.checkpass) {
        query = 'SELECT * FROM staff WHERE email = ?';
        values = staff.email;
    } else {
        query = 'SELECT * FROM staff WHERE email = ? and password = ?';
        values = [staff.email, staff.password];
    }

    sql.query(query,
        values,
        (err, res) => {

            if (err) {
                console.log(`Error : ${err}`);
                result(null, err);
                return;
            }

            if (res.length) {
                result(null, new Staff(res[0]));
                return;
            }

            if (!staff.checkpass) {
                result({ flag: 'not_found' }, []);
            } else {
                result(null, { status: 'invalid_credentails' });
            }

        })
}

module.exports = Staff;