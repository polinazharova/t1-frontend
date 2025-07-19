import client from '../../redisClient.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const taskJSON = await client.get(`task:${id}`);
      if (!taskJSON) return res.status(404).json({ error: 'Not found' });
      const task = JSON.parse(taskJSON);
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'PUT') {
    try {
      const taskJSON = await client.get(`task:${id}`);
      if (!taskJSON) return res.status(404).json({ error: 'Not found' });

      const updatedTask = req.body;
      updatedTask.id = id; // чтобы не потерять id при обновлении

      await client.set(`task:${id}`, JSON.stringify(updatedTask));
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await client.del(`task:${id}`);
      await client.lRem('tasks', 0, id);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
