const Course = require('../models/courseModel')


module.exports={

// --------------------------post students----------------------------

    addCourse: async(req,res, next) => {

        // console.log(req.body);
        // res.send(req.body)
        try {
            const course = new Course(req.body)
            const result = await course.save();
            res.send(result)
        }
        catch (error) {
            console.log(error.message);
            
        }
    },


// --------------------------get Course----------------------------

    getCourse: async (req, res, next) => {
        try {
            const course = await Course.find();  // Fetch all students from the DB
            res.send(course);
            next();  // Optional: Use if middleware comes after this
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error");
        }
    },

// --------------------------updateCourse----------------------------
    putCourse: async (req, res, next) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true };  // To return the updated document
            const updatedCourse = await Course.findByIdAndUpdate(id, update, options);
            
            if (!updatedCourse) {
                return res.status(404).send("Student not found");
            }
    
            res.send(updatedCourse);
            next();  // Optional: Use if middleware comes after this
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error");
        }
    },



// --------------------------patch Course----------------------------


    patchCourse:   async(req, res, next)=>{
        try{
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
            const result = await Course.findByIdAndUpdate(id, update, options)
    
            res.send(result)
        }
        catch(error){
            console.log(error.message);
            
        }
    },



// --------------------------delete Course----------------------------



    deleteCourse: async(req, res, next)=>{


        const id = req.params.id
        try{
            const course = await Course.findByIdAndDelete(id)
            res.send(course);
            next()
        }
        catch(error){
            console.log(error.message);
            
        }
    
    
    }






}