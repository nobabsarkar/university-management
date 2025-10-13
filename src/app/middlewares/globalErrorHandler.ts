/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = error.message || 'Something went wrong!';

  return res.status(statusCode).json({
    success: false,
    message,
    error: error.message,
    issues: error.issues,
  });
};

export default globalErrorHandler;
