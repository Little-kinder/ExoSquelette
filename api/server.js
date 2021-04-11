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
const mysql = require('mysql');

const  con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "exosquelette",
  port : "3306"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

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




app.get("/api/designTypeStock/:designtype_id", function(req, res) {
  
    var type = req.params.designtype_id;
    console.log(type);
    var sql = "SELECT * from designtype WHERE designtype_id=?";
    con.query(sql, [type], function(err, result, fields) {
      if (err) throw err;
      console.log(fields);
      console.log(result[0]);
      console.log(result[0]['stock']);
      res.json([result[0], result[0]['stock']]);
      return result[0];
  });
});

app.post('/api/createorder', function (req, res) {  
  
  const customer = req.body.order;
  var id_item = customer[4];
  var quantity = customer[3];
  var fname = customer[0];
  var lname = customer[1];
  var email = customer[2];
  var typeItem = customer[5];

    var sql = "INSERT INTO commande (design_id, quantity, first_name, last_name, email) VALUES (?, ?, ?, ?, ?)";
    con.query(sql, [id_item, quantity, fname, lname, email], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    var sql = "SELECT stock FROM designtype WHERE designtype_id = ?";
    con.query(sql, [typeItem], function (err, result) {
      if (err) throw err;
      var new_stock = result[0].stock - quantity;
      console.log(new_stock);

      var sql = "UPDATE designtype SET stock = ? WHERE designtype_id = ?";
      con.query(sql, [new_stock, typeItem], function (err, result) {
        if (err) throw err;
        console.log("Stock is updated");
      });
    });
  });

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});