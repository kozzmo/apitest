const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  
  app.post('/chat', (req, res) => {

    var user = req.body.user;
    var message = req.body.message;
    var currentDate = new Date();

    var sql = "insert into CHAT (pseudo, texte, date) values ('" + user + "', '" + message + "', CURRENT_TIMESTAMP)";
    
    getConnection().query(sql,[req.params.id],(err, rows, fields)=>{
        if(!err) {
            console.log( currentDate + ': 1 row inserted');
            // res.send('1 row inserted');
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

