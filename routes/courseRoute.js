const express = require('express');
const routes = express.Router();
const courseController = require('../controllers/courseController');

// get a list of students from the database
routes.get('/getCourse', courseController.getCourse);

// add student to the db
routes.post('/addCourse', courseController.addCourse);

// upgrade student in the database
routes.put('/putCourse/:id', courseController.putCourse);

// update student in the database
routes.patch('/patchCourse/:id', courseController.patchCourse)


// delete a student from the db
routes.delete('/deleteCourse/:id',  courseController.deleteCourse)


module.exports = routes;