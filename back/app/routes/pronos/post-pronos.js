const { getConnection, loadFile } = require('../../lib/mysql');



module.exports = function({ app }) {
  // get pronos
  app.post('/pronos', (req, res) => { 
    // check query params / body payload
    // call service
    // handle error & send response
    console.log('user :', req.body.user, 'matchId :', req.body.matchId, 'prono : ', req.body.userProno)
    const sql = loadFile(__dirname)('post-pronos.sql', { pseudo: req.body.user, matchId: req.body.matchId, prono: req.body.userProno });
 
    getConnection().query(sql,[req.params.id],(err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }  
        else {
            console.log(err);
        }
    }) 
  });
}