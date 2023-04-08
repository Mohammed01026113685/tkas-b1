
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/',(req,res) =>{
  res.send('Welcome to the home page')
})
app.get('/user',(req,res)=>{
  console.log(req.body);
    const user ={
    name : 'sed',
    age : 12
  }
  res.send(`welcom ${user.name}`)
})
app.post('/user/add',(req,res)=>{
const add = req.body;
// var jbr = JSON.parse(request.data.body);
res.send(add);
})

app.listen(8080, () => {
     console.log(' port 8080');
  });
  