const express = require('express');
const path = require('path');
const randomId = require('random-id');
const openjscad = require('./services/openjscad.js');
const config3DModels = require('./config3DModels.json');
const { json } = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const designs = [];
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/dist')));

app.get('/api/designs', (req, res) => {
  console.log('api/designs called!!!!!!!')
  res.json(designs);
});


app.get('/api/designsTypes', (req, res) => {
  console.log('api/designs called!!!!!!!')
  res.json(config3DModels);
});

app.post('/api/designItem', (req, res) => {
  const designItem = req.body.designItem;
  designItem.id = randomId(10);
  console.log('Adding designItem:::::', designItem);
  designs.push(designItem);
  let designType = designItem.type;

  openjscad.get3DObject(designType, Object.assign({}, designItem))
    .then(result => {
        console.log(result);
        res.json(designItem);
    })
    .catch(err => {
        console.log(result);
    });
});


// app.get('/api/stl', (req,res) => {
//   // if(!res.name){
//   //   res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
//   // }else{
//     console.log(path.join(__dirname, 'stl', req.query.name), req.query);
//     res.sendFile(path.join(__dirname, 'stl', req.query.name));
//   // }
// });

app.get('/api/stl/:name', function (req, res, next) {
  var options = {
    root: path.join(__dirname, 'stl'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
});


app.post('/api/createorder', function (req, res) {
  const customer = req.body.order;
  console.log("COMMANDE ::::: " ,customer);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});