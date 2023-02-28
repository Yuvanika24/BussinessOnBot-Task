const client = require('./connectivity.js')
const express = require('express');
const app = express();

var port_number = process.env.PORT || 3003;

app.listen(port_number,()=>{
    console.log(port_number)
    console.log("Server running...")
});

client.connect();

app.get('/api/branch', (req, res)=>{
    client.query(`SELECT * FROM bank WHERE branch LIKE '${req.query.q}' ORDER BY ifsc LIMIT ${req.query.limit} OFFSET ${req.query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})
app.get('/api/search', (req, res) => {
    
    client.query(`SELECT * FROM bank WHERE branch like '%${req.query.q}%' or address like '%${req.query.q}%' or city like '%${req.query.q}%' or district like '%${req.query.q}%' or states like '%${req.query.q}%' or bank_name like '%${req.query.q}%' order by ifsc  limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
        
    });
    client.end;
})