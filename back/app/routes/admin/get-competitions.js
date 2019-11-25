const { getConnection, loadFile } = require('../../lib/mysql');


module.exports = function({ app }) {
  // get pronos
  app.get('/competitions', (req, res) => { 
    // check query params / body payload
    // call service
    // handle error & send response
    const sql = loadFile(__dirname)('get-competitions.sql', {});
    console.log('req get competitions: ', sql)
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
