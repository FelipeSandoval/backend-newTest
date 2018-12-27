const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


this.listOfCounters = [];


router.post('/', (req, res) => {
  this.listOfCounters.push({ id: this.listOfCounters.length + 1, title: req.body.title , count: 0 });
  res.status(200).send(this.listOfCounters)
});

router.get('/counter', (req, res) => {
  res.status(200).send(this.listOfCounters)
});

router.post('/counter/inc', (req, res) => {
  if(req.body.id){
    let i = this.listOfCounters.map(function(e) { return e.id; }).indexOf(req.body.id);
    this.listOfCounters[i].count = this.listOfCounters[i].count + 1;
    res.status(200).send(this.listOfCounters)
  }
});

router.post('/counter/dec', (req, res) => {
  if(req.body.id){
    let i = this.listOfCounters.map(function(e) { return e.id; }).indexOf(req.body.id);
    this.listOfCounters[i].count = this.listOfCounters[i].count - 1;
    res.status(200).send(this.listOfCounters)
  }
});

router.delete('/counter/', (req, res) => {
  console.log(req.body)
  if(req.body.id){
    let i = this.listOfCounters.map(function(e) { return e.id; }).indexOf(req.body.id);
    this.listOfCounters.splice(i, 1);
    res.status(200).send(this.listOfCounters)
  }
});



module.exports = router;