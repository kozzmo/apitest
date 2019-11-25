const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // get match 
  app.get('/matchs',(req, res)=>{
    // check query params / body payload
    // call service
    // handle error & send response

    var sql = "select * from matchs";

    getConnection().query(sql,(err, rows, fields)=>{
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
  });
};