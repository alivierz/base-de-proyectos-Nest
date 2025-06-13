import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
// import { MongoDbModule } from './utils/mongo-db';
import { Enviroment } from './utils/enviroments';
import { RequesFormatMiddleware } from './app.middleware';
import { PgDbModule } from './utils/postgre-db';

@Module({
  imports: [
    AuthModule,
    UserModule,
    Enviroment(process.env.MODE),
    // MongoDbModule,
    PgDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequesFormatMiddleware) //? definimos un middleware global de seguridad con mi token JWT
      .forRoutes('*');
  }
}
