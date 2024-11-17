import { createRedisClient } from '@your-org/db-connectors';

const client = createRedisClient(process.env.REDIS_URL);
await client.connect();

export const redis = client;
