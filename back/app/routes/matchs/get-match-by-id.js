const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // get specific match
  app.get('/matchs/:id', (req, res) => {
    // check query params / body payload
    // call service
    // handle error & send response
    getConnection().query('select * from matchs WHERE id = ?',[req.params.id],(err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }
        else {
            console.log(err);
        }
    })
  });
}

// module.exports = {
//   method: 'GET',
//   path: '/matchs/:id',
//   handler:  (req, res) => {
//     // res.send();
//   }
// };

