import { Request, Response } from 'express';
import { env } from '../config/env';

export const healthCheck = (_req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    data: {
      environment: env.NODE_ENV,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
  });
};
