import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: StudentData } = req.body;

  const result = await UserServices.createStudentIntoDB(password, StudentData);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Student is created successfully',
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: FacultyData } = req.body;

  const result = await UserServices.createFacultyIntoDB(password, FacultyData);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Faculty is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createFaculty,
};
