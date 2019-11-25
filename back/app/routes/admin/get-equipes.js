const { getConnection, loadFile } = require('../../lib/mysql');


module.exports = function({ app }) {
  // get pronos
  app.post('/competition/teams', (req, res) => { 
    // check query params / body payload 
    // call service
    // handle error & send response
    const sql = loadFile(__dirname)('get-equipes.sql', { annee: req.body.annee });
    console.log('req get equipes annee: ', req.body.annee) 
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