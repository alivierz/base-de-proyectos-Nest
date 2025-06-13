import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequesFormatMiddleware implements NestMiddleware {
  //? gestionamos el token de seguridad en las llamadas como un bearer token.
  use(req: any, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(' ')[1]; //? Sacammos el token de los headers
    try {
      req.token = token; //? Agregar el payload al request para su uso en mis servicios o controladores
      req.payload = {};

      next();
    } catch (error) {
      throw new BadRequestException('Error inesperdp');
    }
  }
}
