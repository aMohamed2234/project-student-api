const Student = require('../models/studentsModel')


module.exports={

// --------------------------post students----------------------------

    addStudent: async(req,res, next) => {

        // console.log(req.body);
        // res.send(req.body)
        try {
            const student = new Student(req.body)
            const result = await student.save();
            res.send(result)
        }
        catch (error) {
            console.log(error.message);
            
        }
    },


// --------------------------get students----------------------------

    getStudent: async (req, res, next) => {
        try {
            const students = await Student.find();  // Fetch all students from the DB
            res.send(students);
            next();  // Optional: Use if middleware comes after this
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error");
        }
    },

// --------------------------update students----------------------------
    putStudent: async (req, res, next) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true };  // To return the updated document
            const updatedStudent = await Student.findByIdAndUpdate(id, update, options);
            
            if (!updatedStudent) {
                return res.status(404).send("Student not found");
            }
    
            res.send(updatedStudent);
            next();  // Optional: Use if middleware comes after this
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error");
        }
    },



// --------------------------patch students----------------------------


    patchStudents:   async(req, res, next)=>{
        try{
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
            const result = await Student.findByIdAndUpdate(id, update, options)
    
            res.send(result)
        }
        catch(error){
            console.log(error.message);
            
        }
    },



// --------------------------delete students----------------------------



    deleteStudents: async(req, res, next)=>{


        const id = req.params.id
        try{
            const student = await Student.findByIdAndDelete(id)
            res.send(student);
            next()
        }
        catch(error){
            console.log(error.message);
            
        }
    
    
    }






}