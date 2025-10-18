import z from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  name: z.string(),
});

const updateAcademicFacultyValidationSchema = z.object({
  name: z.string().optional(),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
