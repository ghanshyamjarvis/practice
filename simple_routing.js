var http = require ("http")
var fs = require ("fs")


var server = http.createServer(function (req,res) {
  console.log("request was made", req.url)

  if (req.url==="/home" || req.url==="/")
      {
      res.readHead(200,{"Contect-Type":"text/html"})
      fs.createReadStream(__dirname + "simple.html").pipe(res)
  }
})

server.listen(3000)
  console.log("Listen To Port 3000 ")
