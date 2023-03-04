const express = require ("express");
const app = express();
app.get("/",(req,res)function{
  app.send("HEllo, World!")
});
app.listen(3000,function(){
  console.log("The port is working.")
});
