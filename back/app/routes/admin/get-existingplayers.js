const { getConnection, loadFile } = require('../../lib/mysql');


module.exports = function({ app }) {
  // get pronos
  app.post('/competition/teams/players', (req, res) => { 
    // check query params / body payload 
    // call service
    // handle error & send response
    const sql = loadFile(__dirname)('get-existingplayers.sql', { team: req.body.team });
    console.log('req get existing players: ', sql) 
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