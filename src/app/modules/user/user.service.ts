import { User } from './user.model';

// create student
const createStudentIntoDB = async (studentData: TStudent) => {
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error('User already exists!');
  //   }

  const result = await User.create(studentData); // built in static method

  // const student = new Student(studentData); // create an instance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  // const result = await student.save(); // build instance method

  return result;
};

export const UserService = {
  createStudentIntoDB,
};
