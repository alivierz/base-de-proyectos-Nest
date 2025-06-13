import { MongooseModule } from '@nestjs/mongoose';

export const MongoDbModule = MongooseModule.forRootAsync({
  useFactory: async () => {
    return {
      uri: process.env.MDB_URI,
      connectionFactory: (connection) => {
        console.log('MongoDB connected successfully');
        return connection;
      },
    };
  },
});
