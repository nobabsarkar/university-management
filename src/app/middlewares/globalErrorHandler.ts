/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import { TErrorSource } from '../interface/error';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong!';

  const errorSources: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  // untimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    // err,
  });
};

export default globalErrorHandler;
