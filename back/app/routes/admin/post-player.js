const { getConnection, loadFile } = require('../../lib/mysql');



module.exports = function({ app }) {
  // get pronos
  app.post('/competition/team/player', (req, res) => { 
    // check query params / body payload
    // call service
    // handle error & send response
    
    const sql = loadFile(__dirname)('post-player.sql', { nom: req.body.nom, team: req.body.team, pos: req.body.pos, annee: req.body.annee });
    console.log('post new joueur: ', sql)
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