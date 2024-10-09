const cron = require('node-cron');
const Appointment = require('../models/appointmentModel');
const sendPushNotification = require('../utils/notificationUtils');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel')

cron.schedule('0 0 * * *', async() => {
    const oneDayAhead = new Date();
    oneDayAhead.setDate(oneDayAhead.getDate() + 1);

    const appointments = await Appointment.find({
        // appointments scheduled between 24 hours and 48 hours from the current time.
        appointmentDate: { $gte: oneDayAhead, $lt: new Date(oneDayAhead.getTime() + 24 * 60 * 60 * 1000) },
        status: 'Pending',
    });

    appointments.forEach(async(appointment) => {
        const doctor = await Doctor.findById(appointment.doctorId);
        const patient = await Patient.findById(appointment.patientId);
        if (patient && patient.pushSubscription) {
            sendPushNotification(patient.pushSubscription, {
                title: 'Appointment Reminder',
                body: `You have an appointment with Dr. ${doctor.firstName} tomorrow at ${appointment.appointmentTime}`,
                actions: [{
                        action: 'approve',
                        title: 'Approve Appointment'
                    },
                    {
                        action: 'cancel',
                        title: 'Cancel Appointment'
                    }
                ],
                data: {
                    appointmentId: appointment._id
                }
            });
        }
    });
});