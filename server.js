/*var http = require ("http")
var fs = require ("fs")

http.createServer(function (req,res)
{
  fs.reasFile('./server.html',function (err,data) {
    if (err){
      res.writeHead(404)
      res.write("Page Not Found")
    } else {
      res.writeHead(200,{'content-type':'text/html'})
      res.write("data")
      res.end()
    }
  })
}).listen(3000)
console.log("listening Port at  3000")*/

var express = require (express)
var app =express()
var path = require("path")

app.use(express.static(path.join(__dirname)))

app.get("/",function (req,res)
{
  console.log(req,url)
  res.status(200,sendFile(path.join(__dirname,"index.html")))
})
app.listen(8000,function ()
{
  console.log(8000 port)
})
