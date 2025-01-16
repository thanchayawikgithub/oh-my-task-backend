import { CookieOptions, Response } from 'express';

export const setCookie = (
  res: Response,
  name: string,
  value: string,
  options: CookieOptions,
) => {
  res.cookie(name, value, {
    ...options,
    secure: process.env.NODE_ENV === 'production',
  });
};

export const clearCookie = (res: Response, name: string) => {
  res.clearCookie(name);
};
