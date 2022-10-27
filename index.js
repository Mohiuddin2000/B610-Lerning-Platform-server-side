const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/course-details.json');

app.get('/', (req, res) => {
    res.send('Courses API running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course_info = courses.find(n => n.id === id);
    res.send(course_info);
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = courseDetails.find(n => n.id === id);
    res.send(selectedcourse);
});

app.listen(port, () => {
    console.log('Course API Server running on port', port);
})
