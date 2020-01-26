//initial requirement
const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//mongoDB options
const options = { useNewUrlParser: true, useUnifiedTopology: true }
//port setting
const port = process.env.PORT || 3000;
// app for express
const app = express();

//Use following middlewares
//Helmet
app.use(helmet());
//express.json()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//Passport
app.use(passport.initialize());
app.use(passport.session());
//Cor
app.use(cors());

//Hello World!
app.get('/', (req, res) => {
  res.send('Hello Worlds!');
 });

 //hoge!
 app.get('/hoge', (req, res) => {
  res.send('hoge!');
 })

//name!
 app.get('/hoge/:name', (req, res) => {
   let data = req.params;
   console.log(data.name);
   res.json({
    name: data.name
  })
});

 // port listening
app.listen(port, () => console.log(`OK, Server started on port ${port}`));