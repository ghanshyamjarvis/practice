// Demo For EJS VIEW


var express = require ("express")
var app =express()

app.set("view engine","ejs")


 app.get ('/',function (req,res)

   {
    res.sendFile(__dirname + "/simple.html")
   })

app.get ('/contact',function (req,res)
{
  //res.send("This is Contact Page")
  res.sendFile(__dirname + "/contact.html")
})


app.get('/profile/:name',function (req,res)
{
  var data ={age:29,job:"programmer"}

  res.render("profile",{person:req.params.name,data:data})
})



app.listen(3000,function () {
  console.log(3000)
})