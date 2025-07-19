import client from '../redisClient.js';
import { nanoid } from 'nanoid';

export default async function handler(req, res) {
  const TASKS_LIST_KEY = 'tasks';

  if (req.method === 'GET') {
    try {
      const taskIds = await client.lRange(TASKS_LIST_KEY, 0, -1);
      const tasks = await Promise.all(
        taskIds.map(id => client.get(`task:${id}`))
      );

      const parsedTasks = tasks
        .map(t => (t ? JSON.parse(t) : null))
        .filter(t => t !== null);

      res.status(200).json(parsedTasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const newTask = req.body;
      const id = nanoid(10);
      newTask.id = id;

      await client.set(`task:${id}`, JSON.stringify(newTask));
      await client.rPush(TASKS_LIST_KEY, id);

      res.status(201).json({ id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
