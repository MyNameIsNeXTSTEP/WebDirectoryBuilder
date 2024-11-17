import { createPostgresPool } from '@your-org/db-connectors';

const pool = createPostgresPool(process.env.POSTGRES_URL);

export const query = (text: string, params: any[]) => pool.query(text, params);
