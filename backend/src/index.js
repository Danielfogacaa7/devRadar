const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

 mongoose.connect('mongodb+srv://daniel:1234567Da@cluster0.wwnib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });

app.listen(3333);
