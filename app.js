const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/data',(req,res)=>{
  res.json({Name:"Yazan",LastName:"Tafesh"})
})

app.listen(PORT,() => console.log(`Port ${PORT} listening`))