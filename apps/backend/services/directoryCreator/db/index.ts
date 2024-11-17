import { createMongoClient } from '@your-org/db-connectors';

const client = createMongoClient(process.env.MONGO_URL);

export const db = client.db('directory_creation');
