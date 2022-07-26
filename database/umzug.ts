import { connect, Connection } from 'mongoose';
import { MigrationFn, MongoDBStorage, Umzug } from 'umzug';

export type SeederFn = MigrationFn<Connection['db']>;

export async function createUmzugInstance() {
  const { connection } = await connect(process.env.DB_URI);

  const umzug = new Umzug({
    logger: console,
    migrations: {
      glob: ['./seeders/*.ts', { cwd: __dirname }],
    },
    context: connection.db,
    storage: new MongoDBStorage({ connection }),
  });

  return umzug;
}
