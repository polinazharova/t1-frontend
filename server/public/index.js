import redis from "redis";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { nanoid } from 'nanoid';
dotenv.config();
const { REDIS_USERNAME, REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } = process.env;
const TASKS_LIST_KEY = 'tasks';
const client = redis.createClient({
    username: REDIS_USERNAME,
    password: REDIS_PASSWORD,
    socket: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
    }
});
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();
const app = express();
app.use(cors());
app.use(express.json());
// GET /tasks
app.get('/api/tasks', async (req, res) => {
    try {
        const taskIds = await client.lRange(TASKS_LIST_KEY, 0, -1);
        const tasks = await Promise.all(taskIds.map(id => client.get(`task:${id}`)));
        const parsedTasks = tasks
            .map(t => (t ? JSON.parse(t) : null))
            .filter(t => t !== null);
        res.json(parsedTasks);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// GET /task/:id
app.get('/api/task/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const taskJSON = await client.get(`task:${id}`);
        if (!taskJSON)
            return res.status(404).json({ error: 'Not found' });
        const task = JSON.parse(taskJSON);
        res.json(task);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// POST /tasks
app.post('/api/tasks', async (req, res) => {
    try {
        const newTask = req.body;
        const id = nanoid(10);
        newTask.id = id;
        await client.set(`task:${id}`, JSON.stringify(newTask));
        await client.rPush(TASKS_LIST_KEY, id);
        const response = { id };
        res.status(201).json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// PUT /task/:id
app.put('/api/task/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const taskJSON = await client.get(`task:${id}`);
        if (!taskJSON)
            return res.status(404).json({ error: 'Not found' });
        const updatedTask = req.body;
        await client.set(`task:${id}`, JSON.stringify(updatedTask));
        res.json(updatedTask);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// DELETE /task/:id
app.delete('/api/task/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await client.del(`task:${id}`);
        await client.lRem(TASKS_LIST_KEY, 0, id);
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default app;
