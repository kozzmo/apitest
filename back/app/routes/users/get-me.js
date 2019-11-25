const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // get members 
  app.get('/me', (req, res) => {
    // check query params / body payload
    // call service
    // handle error & send response
    getConnection().query(`select * from USERS WHERE id = ${req.userId} LIMIT 1`,(err, rows, fields)=>{
        if(!err) {
            res.send(rows && rows.shift());
        }
        else {
            console.log(err);
        }
    })
  });
};