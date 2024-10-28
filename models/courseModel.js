const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: [true, 'Course name is required']
    },
    courseCode: {
        type: String,
        required: [true, 'Course code is required'],
        unique: true
    },
    courseDescription: {
        type: String,
        required: [true, 'Course description is required']
    },
    courseDuration: {
        type: String,
        required: [true, 'Course duration is required']
    },
    startDate: {
        type: Date,
        required: [true, 'Start date is required']
    },
    endDate: {
        type: Date,
        required: [true, 'End date is required']
    },
    courseCategory: {
        type: String,
        required: [true, 'Course category is required'],
        enum: ['Science', 'Technology', 'Arts', 'Business', 'Other'] // Add more categories as needed
    },
    level: {
        type: String,
        required: [true, 'Course level is required'],
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    modeOfStudy: {
        type: String,
        required: [true, 'Mode of study is required'],
        enum: ['Online', 'In-person', 'Hybrid']
    },
    cost: {
        type: Number, // Use Number if it's a price
        required: [true, 'Cost is required']
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
