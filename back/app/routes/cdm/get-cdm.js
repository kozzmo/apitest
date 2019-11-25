const { getConnection } = require('../../lib/mysql');

const fs = require('fs-extra');
const path = require('path');

const fileUrl = path.join(__dirname, 'cdm.sql');

var sql = fs.readFileSync(fileUrl).toString();




module.exports = function({ app }) {
  // get cdm
  app.get('/cdm',(req, res)=>{
    // console.log('sqlReq : ' + sql);
    getConnection().query(sql,(err, rows, fields)=>{  
        if(!err) {
            res.send(rows);
        }
        else { 
            console.log(err);  
        }
    }) 
  });
};