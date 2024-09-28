const asyncHandler = require("../middlewares/asyncHandler")

const registerDoctor = asyncHandler(async(req, res) => {
    console.log(req.body);
    const { firstName, email, password } = req.body;
})


const loginDoctor= () => {}


const getAllDoctors= () => {}


module.exports = {
    getAllDoctors,
    registerDoctor,
    loginDoctor
}