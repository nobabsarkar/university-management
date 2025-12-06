/* eslint-disable @typescript-eslint/no-explicit-any */
// import jwt from 'jsonwebtoken';

// export const createToken = (
//   jwtPayload: { userId: string; role: string },
//   secret: string,
//   expiresIn: string,
// ) => {
//   return jwt.sign(jwtPayload, secret, {
//     expiresIn,
//   });
// };

import jwt, { SignOptions } from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  const options: SignOptions = {
    expiresIn: expiresIn as any,
  };

  return jwt.sign(jwtPayload, secret, options);
};
