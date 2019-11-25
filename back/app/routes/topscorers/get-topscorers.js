const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // get equipe 
  app.get('/topscorers',(req, res)=>{
    // check query params / body payload
    // call service
    // handle error & send response
    getConnection().query('select * from joueurs order by but desc limit 5',(err, rows, fields)=>{
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
  });
};