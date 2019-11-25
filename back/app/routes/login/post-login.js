const jwt = require('jsonwebtoken');
const config = require('config');
const { getConnection } = require('../../lib/mysql');

module.exports = function({ app }) {
  // login
  app.post('/login', (req, res) => {

    var user = req.body.user;
    var pwd = req.body.pwd;
    var currentDate = new Date();
    var sql = "select * from USERS where pseudo = '" + user + "' and mdp = '" + pwd + "'";

    getConnection().query(sql,[req.params.id],(err, rows, fields)=>{
        // if(rows[0].pseudo == user && rows[0].mdp == pwd) {
        if(rows.length == 1) {
            // OK
            jwt.sign({ sub: user, aud: 'user' }, config.get('jwt.secret'), (err, token) => {
              // res.json({token});
              res.json( {
                user,
                token,
                userId: rows[0].id,
                userEmail: rows[0].mail,
                } 
              );
              console.log('A user connected on : ' + currentDate); 
              // console.log('rows.length : ' + rows.length); 
              console.log('Session Id : ' + req.session.id); 
              console.log('Session user : ' + user); 
              console.log('userId : ' + rows[0].id);
              console.log('Email : ' + rows[0].mail);
              // console.log('Token : ' + token);
            });
        }
        else {
            console.log(currentDate, 'Err connecting from user: ', user);           
        }
    })
  });
}