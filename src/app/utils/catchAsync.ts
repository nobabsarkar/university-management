import { NextFunction, Request, RequestHandler, Response } from 'express';

// this is higher order function. controller don't have need try catch. catchAsync is enough
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
