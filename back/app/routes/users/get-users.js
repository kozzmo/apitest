const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // get members 
  app.get('/users',(req, res)=>{
    // check query params / body payload
    // call service
    // handle error & send response
    getConnection().query('select * from users',(err, rows, fields)=>{
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
  });
};