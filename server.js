const express = require('express');
const app = express();
const port = process.env.PORT || 3001;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const CounterController = require('./counter/counterController');
app.use('/api/v1',CounterController)

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)
})