const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // get chat LIMIT 100
  app.get('/chat', (req, res) => {
    // check query params / body payload
    // call service
    // handle error & send response

    var sql = "'select * from chat order by date desc limit 100'";

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

// module.exports = {
//   method: 'GET',
//   path: '/matchs/:id',
//   handler:  (req, res) => {
//     // res.send();
//   }
// };

