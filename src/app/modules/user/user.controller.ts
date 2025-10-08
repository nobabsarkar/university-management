/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: StudentData } = req.body;

    // data validation using zod
    // const zodParseData = studentValidationSchema.parse(StudentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      StudentData,
    );

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created successfully',
    //   data: result,
    // });

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
