const express = require("express");
const app = express();

app.use(express.json()); 

let students = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Tom" }
];


app.delete("/deletedstudent/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let student = students.find(s => s.id === id);

    if (student) {
        students = students.filter(s => s.id !== id);
        res.status(200).json({
            message: "Student deleted successfully",
            student: student
        });
    } else {
        res.status(404).json({
            message: "Student not found"
        });
    }
});

app.post("/addstudent", (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({
            message: "Please provide both id and name"
        });
    }

    if (students.find(s => s.id === id)) {
        return res.status(400).json({
            message: "Student with this ID already exists"
        });
    }

    const newStudent = { id, name };
    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});


app.get("/student", (req, res) => {
    const id = parseInt(req.query.id);

    if (id) {
        let student = students.find(s => s.id === id);

        if (student) {
            res.status(200).json({
                message: "Student found",
                student: student
            });
        } else {
            res.status(404).json({
                message: "Student not found"
            });
        }
    } else {
        res.json(students);
    }
});

app.listen(2000, () => {
    console.log("Server started on http://localhost:2000");
});
