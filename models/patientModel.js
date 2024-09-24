const mongooes = require('mongoose');

const patientSchema = new mongooes.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },
  gender: {
    type: String,
    require: true
  },
  dataOfBirth: {
    type: Date,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  avatar: {
    type: String,
  },
  address: {
    type: String,
    require: true
  },
  healthHistory: [
    {
      familyStatus: {
        type: String,
        require: true
      },
      diseases: {
        type: String,
        require: true
      },
      examinations: {
        type: String,
        require: true
      },
      diagnosis: {
        type: String,
        require: true
      },
      treatment: {
        type: String,
        require: true
      },
    }
  ],
  appointmentsNotifications: [
    {
      status: {
        type: Date,
        enum: ['Approved', 'Appointment Remeber']
      },
      massage: {
        type: String
      },
      read: {
        type: Boolean
      },
    }
  ]
});
