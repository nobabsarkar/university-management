import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';

// create semester registration
const createSemesterRegisrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  // check if the semester is exist
  const isAcademicSemesterExits =
    await AcademicSemester.findById(academicSemester);

  if (!isAcademicSemesterExits) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'This academic semester not found',
    );
  }

  // check if the semester is already registered!
  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester,
  });

  if (isSemesterRegistrationExists) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'This semester is already register!',
    );
  }

  const result = await SemesterRegistration.create(payload);
  return result;
};
const getAllSemesterRegisrationsFromDB = async () => {};
const getSingleSemesterRegisrationFromDB = async () => {};
const updateSemesterRegisrationInto = async () => {};

export const SemesterRegistrationService = {
  createSemesterRegisrationIntoDB,
  getAllSemesterRegisrationsFromDB,
  getSingleSemesterRegisrationFromDB,
  updateSemesterRegisrationInto,
};
