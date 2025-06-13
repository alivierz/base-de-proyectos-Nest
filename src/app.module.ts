import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MongoDbModule } from './utils/mongo-db';
import { Enviroment } from './utils/enviroments';

@Module({
  imports: [
    AuthModule,
    UserModule,
    Enviroment(process.env.MODE),
    MongoDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
