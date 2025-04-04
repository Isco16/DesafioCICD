const app = require('./app.js'); // Assuming app.js is your main file
const { Router } = require("express");
const appRoute = Router();

let tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' }
];

appRoute.get('/tasks', (req, res) => {
    res.json(tasks);
});

appRoute.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
});

// console.log(app);

// app.use('/api', appRoute); // Use the routes defined in appRoutes.js


module.exports = appRoute;