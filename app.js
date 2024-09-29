require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const doctorsRouter = require('./routes/doctorsRoute');
const appointmentRouter = require('./routes/appointmentRoute');
const prescreptionRouter = require('./routes/prescreptionRoute');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentRouter);
app.use('/api/prescreptions', prescreptionRouter);


app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({status: error.statusText || httpStatusText.ERROR, message: error.message, code: error.statusCode || 500, data: null});
});

mongoose.connect(DB_URL).then(() => {
    console.log(`Mongodb Server Started`);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server Started on http://${HOSTNAME}:${PORT}`);
});
