import mongoose, { model } from 'mongoose';
import { TSemesterRegistration } from './semesterRegistration.interface';

const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {},
);

export const SemesterRegistration = model<TSemesterRegistration>(
  'academicSemester',
  semesterRegistrationSchema,
);
