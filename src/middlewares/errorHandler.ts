import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';
import { isDevelopment } from '../config/env';

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const error = err as AppError;
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`, {
    error: err,
    stack: err.stack,
  });

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    ...(isDevelopment && { stack: err.stack }),
  });
};

export const notFoundHandler = (req: Request, _res: Response, next: NextFunction): void => {
  const error = new AppError(`Route ${req.originalUrl} not found`, 404);
  next(error);
};
