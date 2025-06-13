import { ConfigModule } from '@nestjs/config';

export const Enviroment = async (isProduction: boolean | any = false) => {
  return ConfigModule.forRoot({
    ignoreEnvFile: isProduction ? true : false,
    isGlobal: true,
    envFilePath: ['.development.env'], ///? el nombre de este archivo es a gusto
  });
};
