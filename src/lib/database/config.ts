// config.ts - Azure PostgreSQL configuration
export const dbConfig = {
  host: process.env.PGHOST || 'tender-tracking-db3.postgres.database.azure.com',
  database: process.env.PGDATABASE || 'postgres',
  user: process.env.PGUSER || 'fkdtncsgkc',
  password: process.env.PGPASSWORD || '',
  port: parseInt(process.env.PGPORT || '5432', 10),
  ssl: {
    rejectUnauthorized: false,
  },
  // Connection pool configuration
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 30000,
  keepAlive: true,
  keepAliveInitialDelayMillis: 10000,
};
