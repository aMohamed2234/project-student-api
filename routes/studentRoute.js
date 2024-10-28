const express = require('express');
const routes = express.Router();
const studentController = require('../controllers/studentController');
const { verifyAccessToken } = require('../helpers/jwtHelper');

// get a list of students from the database
routes.get('/getStudent', verifyAccessToken, studentController.getStudent);

// add student to the db
routes.post('/addStudent', studentController.addStudent);

// upgrade student in the database
routes.put('/putStudent/:id', studentController.putStudent);

// update student in the database
routes.patch('/patchStudents/:id', studentController.patchStudents)


// delete a student from the db
routes.delete('/deleteStudents/:id',  studentController.deleteStudents)


module.exports = routes;


