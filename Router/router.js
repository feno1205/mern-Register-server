const express = require('express')
const userController = require('../Controllers/userController')

const router = new express.Router()

router.post('/register',userController.register)

router.get("/get-student-details", userController.getStudentDetails)

module.exports = router