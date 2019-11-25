const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // get equipe 
  app.get('/teams',(req, res)=>{
    // check query params / body payload
    // call service
    // handle error & send response
    getConnection().query('select * from chat where pseudo = "j0hnb00k" and id > "1088"',(err, rows, fields)=>{
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
  });
};