import { NextFunction, Request, Response } from 'express';
import { ERROR_MESSAGE } from '../util/error_message';
import { verify, decode } from 'jsonwebtoken';

export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: ERROR_MESSAGE.UNAUTHORIZED });
  }

  const secret = process.env.SECRET_KEY as string;
  const [, token] = authToken.split(' ');

  try {
    verify(token, secret);

    return next();
  } catch (e) {
    return res.status(401).json({ message: ERROR_MESSAGE.UNAUTHORIZED });
  }
};
