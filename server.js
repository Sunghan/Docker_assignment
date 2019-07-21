var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/taskModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongodb://localhost/taskdb
mongoose.connect('mongodb://mongo:27017/taskdb', { useNewUrlParser: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not connected to database ERROR! ", err);
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/taskRoute'); //importing route
routes(app); //register the route


app.listen(port);


app.use(function(req, res){
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('task web API server started on: ' + port);