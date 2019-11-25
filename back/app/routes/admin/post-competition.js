const { getConnection, loadFile } = require('../../lib/mysql');



module.exports = function({ app }) {
  // get pronos
  app.post('/competition', (req, res) => { 
    // check query params / body payload
    // call service
    // handle error & send response
    console.log('post competition - type :', req.body.typecomp, ' annee :', req.body.annee, ' hote : ', req.body.hote, ' apirank: ', req.body.apirank)
    const sql = loadFile(__dirname)('post-competition.sql', { type: req.body.typecomp, annee: req.body.annee, hote: req.body.hote, apirank: req.body.apirank });
 
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