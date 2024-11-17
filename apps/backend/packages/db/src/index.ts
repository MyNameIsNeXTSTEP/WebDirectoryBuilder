import { Pool } from 'pg';
import { MongoClient } from 'mongodb';
import { createClient } from 'redis';

export const createPostgresPool = (connectionString: string) => {
  return new Pool({ connectionString });
};

export const createMongoClient = (uri: string) => {
  return new MongoClient(uri);
};

export const createRedisClient = (url: string) => {
  return createClient({ url });
};

