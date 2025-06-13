import { SequelizeModule } from '@nestjs/sequelize';

const defaultOptions = {
  dialect: 'postgres',
  port: process.env.PG_PORT || 5432,
  username: process.env.PG_USER || 'user',
  password: process.env.PG_PASS || 'password',
  database: process.env.PG_DB_NAME || 'db',
  synchronize: true,
};

export const PgDbModule = SequelizeModule.forRootAsync({
  useFactory: async () => {
    return {
      dialect: 'postgres',
      host: process.env.PG_HOST || 'localhost',
      port: +(process.env.PG_PORT || defaultOptions.port),
      username: process.env.PG_USER || defaultOptions.username,
      password: process.env.PG_PASSWORD || defaultOptions.password,
      database: process.env.PG_DATABASE || defaultOptions.database,
      autoLoadModels: true,
      synchronize: defaultOptions.synchronize,
    };
  },
});
