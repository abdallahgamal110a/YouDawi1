require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

const app = express();

mongoose.connect(DB_URL).then(() => {
  console.log(`Mongodb Server Started`);
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server Started on http://${HOSTNAME}:${PORT}`);
});
