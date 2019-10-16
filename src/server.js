const express = require('express');
const route = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lucas:Utahika_10@teste-xzqee.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true, 
useUnifiedTopology: true});

const app = express();
app.use(express.json());
app.use(route);

app.listen(3333);