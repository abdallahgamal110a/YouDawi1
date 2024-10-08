const jwt = require("jsonwebtoken");

const authorizeUserAccess = (allowedRoles, reqHeader, requestedId) => {
    try {
        if (!reqHeader.authorization) {
            return { authorized: false, message: 'Authorization header not found.' };
        }

        const token = reqHeader.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const userId = decoded.id;
        const userRole = decoded.role;

        if (allowedRoles.includes(userRole)) {
            if ((userRole === 'doctor' || userRole === 'patient') && userId !== requestedId) {
                return { authorized: false, message: 'You are not authorized to view this data.' };
            }
            return { authorized: true };
        }

        return { authorized: false, message: 'You are not authorized to view this data.' };
    } catch (err) {
        console.error('Token verification failed:', err); // Log the error
        return { authorized: false, message: 'Invalid token or authorization failed.' };
    }
};


module.exports = {
    authorizeUserAccess
};