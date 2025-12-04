import z from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    password: z.string(),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string(),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
};
