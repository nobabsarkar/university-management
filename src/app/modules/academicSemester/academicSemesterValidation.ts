import z from 'zod';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    year: z.string(),
    code: z.string(),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
