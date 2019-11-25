const { getConnection, loadFile } = require('../../lib/mysql');



module.exports = function({ app }) {
  // get pronos 
  app.post('/del/competition', (req, res) => { 
    // check query params / body payload
    // call service
    // handle error & send response
    console.log('del competition:', req.body.competition, ' annee :', req.body.annee);
    const sql = loadFile(__dirname)('del-competition.sql', { type: req.body.competition, annee: req.body.annee });
    console.log('sql del compet: ', sql);
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