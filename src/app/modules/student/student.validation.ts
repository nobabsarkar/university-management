// import { z } from 'zod';

// // UserName Schema
// const userNameValidationSchema = z.object({
//   firstName: z
//     .string()
//     .min(1)
//     .max(20)
//     .refine((val) => {
//       const firstNameStr = val.charAt(0).toUpperCase() + val.slice(1);
//       return firstNameStr === val;
//     }),
//   middleName: z.string().optional(),
//   lastName: z
//     .string()
//     .min(1)
//     .regex(/^[A-Za-z]+$/),
// });

// // Guardian Schema
// const guardianValidationSchema = z.object({
//   fatherName: z.string(),
//   fatherOccupation: z.string(),
//   fatherContactNo: z.string(),
//   motherName: z.string(),
//   motherOccupation: z.string(),
//   motherContactNo: z.string(),
// });

// // Local Guardian Schema
// const localGuardianValidationSchema = z.object({
//   name: z.string(),
//   occupation: z.string(),
//   contactNo: z.string(),
//   address: z.string(),
// });

// // Student Schema
// const studentValidationSchema = z.object({
//   id: z.string(),
//   password: z.string(),
//   name: userNameValidationSchema,
//   gender: z.enum(['male', 'female', 'other']),
//   dateOfBirth: z.string().optional(),
//   email: z.string().email(),
//   contactNo: z.string().min(1),
//   emergencyContactNo: z.string().min(1),
//   bloodGroup: z
//     .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
//     .optional(),
//   presentAddress: z.string().min(1),
//   permanentAddress: z.string().min(1),
//   gurdian: guardianValidationSchema,
//   localGuardian: localGuardianValidationSchema,
//   profileImg: z.string().optional(),
//   isActive: z.enum(['active', 'block']).default('active'),
// });

// export default studentValidationSchema;

import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const studentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
