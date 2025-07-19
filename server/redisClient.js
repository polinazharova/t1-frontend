import redis from 'redis';

const {
  REDIS_USERNAME,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_PORT
} = process.env;

const client = redis.createClient({
  username REDIS_USERNAME,
  password REDIS_PASSWORD,
  socket {
    host REDIS_HOST,
    port Number(REDIS_PORT),
  }
});

client.on('error', (err) = console.error('Redis Client Error', err));

if (!client.isOpen) {
  await client.connect();
}

export default client;
