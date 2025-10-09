/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getAllStudens = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudens,
  getSingleStudent,
  deleteStudent,
};
