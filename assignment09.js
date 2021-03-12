var express = require('express');
const axios = require('axios');
var app = express();

const port = 3000;

app.get('/say',(req,res)=>{
    const url = 'https://69b4xqy0qc.execute-api.us-east-1.amazonaws.com/first/'+'?keyword='+req.query.keyword;
  //https://69b4xqy0qc.execute-api.us-east-1.amazonaws.com/first/
    console.log(url);
    axios.get(url)
        .then(response => {

          console.log(response);
            res.send(response.data);
        }).catch(function(error){
            console.log(error);
        })
});

app.listen(port);
