var http = require ("http")
var fs = require ("fs")


var server = http.createServer(function (req,res)
{
  console.log("request was made",req.url)
  res.writeHead(200,{"Content-Type":"application/json"})

var myObj =
  {
    name:"shyam",
    job:"programmer",
    age:"30"
  }
  res.end(JSON.stringify(myObj))
})


server.listen(3000,function ()
{
  console.log("Listen To Port 3000 ")
})