const request = require('supertest');
const express = require('express');
const app = require('../server');
describe('API Tests', () => {
    it('GET /tasks - Obtener tareas', async () => {
        const res = await request(app).get('/tasks');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('tasks');
    });
    it('GET /tasks/:id - Obtener una tarea', async () => {
        task = { id: 1, name: 'Task 1' };
        const taskId = 1; // Cambia esto según el ID de la tarea que quieras probar
        const res = await request(app).get(`/tasks/${taskId}`);
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual(task);
    });
    // it('POST /tasks - Agregar un elemento', async () => {
    //     const res = await request(app).post('/tasks').send({ item: 'Nuevo Item' });
    //     expect(res.status).toBe(201);
    //     expect(res.body).toHaveProperty('message', 'Item added');
    // }); it('POST /home - Error si no se envía item', async () => {
    //     const res = await request(app).post('/home').send({});
    //     expect(res.status).toBe(400);
    //     expect(res.body).toHaveProperty('error', 'Item is required');
    // });
});