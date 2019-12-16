

//module require
var events = require ('event')
var util = require ('util')

        //object Constructor
          var Person =function (name)
          {
          this.name=name
          }

        //Inherit Event
          util.inherits (Person,events.EventEmitter)

        //Object Create for name
          var shyam = new Person ("shyam")
          var raj = new Person("raj")
          var khushi = new Person("Khushi")

        //Array
          var people =["shyam","raj","khushi"]

        //For Each Loop
          people.forEach(function (Person)
              {
                Person.on('speak',function (msg)
                {
                  console.log(Person.name + ' Said ' + msg )
                })
              })


          shyam.emit("speck","Hello")