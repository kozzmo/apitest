const { getConnection, loadFile } = require('../../lib/mysql');

module.exports = function({ app }) {
  app.get('/pronos/done', (req, res) => {  
    // check query params / body payload
    // call service
    // handle error & send response

    // console.log('get pronos done back user: ', req.user); OK
    const sql = loadFile(__dirname)('get-pronos-done.sql', { pseudo: req.user });

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