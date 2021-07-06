const Staff = require('../model/Staff');
const sql = require('../private/connection/connection')

Staff.getAll = result => {
    const query = 'SELECT * FROM staff';
    sql.query(query, 
        (err, res, fields) => {

            if (err) {
                console.log(`Error : ${err}`);
                result(null, err);
                return;
            }

            var list = [];

            Object.keys(res).forEach( key => {
                list.push(new Staff(res[key]));
            });

            result(null, list);
            
    });
}


Staff.getById = (staff, result) => {

    const query = 'SELECT * FROM staff WHERE staff_id = ?';

    sql.query(query, 
        staff, 
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

            result({ flag : 'not_found'}, []);
    });

};

// To verify first if email is registered
Staff.getByEmail = (staff, result) => {

    let query = 'SELECT * FROM staff WHERE email = ?';

    sql.query(query, 
        
        (err, res) => {

            if (err) {
                console.log(`Error : ${err}`);
                result({ flag : "not_found" }, err);
                return;
            }

            if (res.length) {
                console.log(`found staff login : ${res[0]}`);
                result(null, res[0]);
                return;
            }

            result(null, { message : 'Record not found'});

    })
}

module.exports = Staff;