import { Request, Response, NextFunction } from 'express';

// Utility to wrap async route handlers
// Note: express-async-errors handles this automatically, but this is a manual alternative
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
