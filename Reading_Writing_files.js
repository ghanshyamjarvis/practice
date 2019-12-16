

/*
// For Sync Read File Only
var fs =require ('fs')

  //read file from the text file and encode through utf8 binary data 0 and 1 to data
  var readme = fs.readFileSync("plain_text.txt","utf8")
  console.log(readme)
*/

/*
// For Sync Read File Only
var fs =require ('fs')

var write = fs.readFileSync("plain_text.txt","utf8")
fs.writeFileSync("new_plain_text.txt",write)
*/

//For Async Read Files
    const fs = require("fs")

  fs.readFile("plain_text.txt","utf8", function(err,data)
    {
      console.log(data)
    })

