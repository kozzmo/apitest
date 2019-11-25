const { getConnection, loadFile } = require('../../lib/mysql');



module.exports = function({ app }) {
  // get pronos 
  app.post('/competition/team/del/player', (req, res) => { 
    // check query params / body payload
    // call service
    // handle error & send response
    console.log('del player:', req.body.nom, ' annee:', req.body.annee, ' pos: ', req.body.pos, ' team: ', req.body.team);
    const sql = loadFile(__dirname)('del-player.sql', { nom: req.body.nom, annee: req.body.annee, pos: req.body.pos, team: req.body.team });
    console.log('sql del player: ', sql);
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