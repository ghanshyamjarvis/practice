var http = require ("http")
var fs = require ("fs")

var readStream = fs.createReadStream(__dirname + "/plain_text.txt" + "utf8")
var writeStream = fs.createWriteStream(__dirname + "/new_write.txt")


readStream.pipe(writeStream)