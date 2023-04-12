// import or load the express module
const express = require('express');

//create an instance of the express app
const app = express();
const PORT = 3000;

// Data or Models
const students = require('./models/students');
const teachers = require('./models/teachers');

// ======Configuration=====
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//setting a middleware to run in the app which is a function which will
//run in between the request and response cycle
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})

//parses the data from the request
app.use(express.urlencoded({extended: false}))


//==============define our routes=========

//root or main route
app.get('/', function(req, res){
    // use the response object to send back some data
    res.render('Welcome');
})

//first route to /home
app.get('/database', function(req, res){
    // use the response object to send back some data
    res.render('Database');
})

//Index route for students 
app.get('/students', (req, res) => {
    res.render('students/Index', {students: students});
})

/**
 * New Route : (return a form to create a new student)
 */
app.get('/students/new', (req,res) => {
    res.render('students/New');
})

/**
 * POST method route (accept data from the form)
 */
app.post('/students',(req,res) => {
    
    console.log(req.body);
    
    students.push(req.body);
    res.redirect('/students');
})

//Show route for student
app.get('/students/:indexOfStudentsArray', (req, res) => {
    console.log(req.params);
    res.render('students/Show', {student: students[req.params.indexOfStudentsArray]});
})

//Index route for teachers 
app.get('/teachers', (req, res) => {
    res.render('teachers/Index', {teachers: teachers});
})

/**
 * New Route : (return a form to create a new teacher)
 */
app.get('/teachers/new', (req,res) => {
    res.render('teachers/New');
})

/**
 * POST method route (accept data from the form)
 */
app.post('/teachers',(req,res) => {
    
    console.log(req.body);
    
    teachers.push(req.body);
    res.redirect('/teachers');
})
//Show route for teacher
app.get('/teachers/:indexOfTeachersArray', (req, res) => {
    res.render('teachers/Show', {teacher: teachers[req.params.indexOfTeachersArray]});
})

//
app.get('*', (req, res) => {
    res.render('404');
})

//start to listen for requests
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})