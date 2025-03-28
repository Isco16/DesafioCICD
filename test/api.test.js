const request = require('supertest');
const express = require('express');
const app = require('../app.js'); // Asegúrate de que la ruta sea correcta
describe('API Tests', () => {
    it('GET /tasks/:id - Obtener una tarea', async () => {
        const task = { id: 1, name: 'Task 1' };
        const taskId = 1; // Cambia esto según el ID de la tarea que quieras probar
        const res = await request(app).get(`/tasks/${taskId}`);
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual(task);
    });
    it('GET /tasks - Obtener elementos', async () => {
        let tasks = [
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' }
        ];
        const res = await request(app).get('/tasks');
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual(tasks);
    });
});