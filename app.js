const express = require('express');
const app = express();
const appRoute = require('./appRoutes.js'); // Assuming appRoutes.js is your routes file

app.use(express.json());

// let tasks = [
//     { id: 1, name: 'Task 1' },
//     { id: 2, name: 'Task 2' }
// ];

// app.get('/tasks', (req, res) => {
//     res.json(tasks);
// });

// app.get('/tasks/:id', (req, res) => {
//     const task = tasks.find(t => t.id === parseInt(req.params.id));
//     if (!task) return res.status(404).send('Task not found');
//     res.json(task);
// });

app.use('/api', appRoute); // Use the routes defined in appRoutes.js

const PORT = 3000;
app.listen(PORT, () => console.log(`API is running on port ${PORT}`));

module.exports = app;