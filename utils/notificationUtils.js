const webPush = require('web-push');

const vapidKeys = {
    publicKey: process.env.VAPI_PUBLIC_KEY,
    privateKey: process.env.VAPI_PRIVATE_KEY
};

webPush.setVapidDetails(
    'yassminash305@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const sendPushNotification = (subscription, payload) => {
    webPush.sendNotification(subscription, JSON.stringify(payload))
        .then(result => console.log('Notification sent successfully', result))
        .catch(error => console.error('Error sending notification', error));
};

module.exports = { sendPushNotification };