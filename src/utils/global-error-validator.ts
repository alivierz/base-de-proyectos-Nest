import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // Obtener el código de estado desde la excepción
    const status = exception.getStatus();
    response.status(status).json({
      statusCode: status,
      message: exception.getResponse(),
      //   error: 'Errores de validación',
    });
  }
}
