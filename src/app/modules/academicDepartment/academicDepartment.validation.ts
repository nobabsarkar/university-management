import z from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    academicFaculty: z.string(),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
