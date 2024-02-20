const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const port = 5000;

