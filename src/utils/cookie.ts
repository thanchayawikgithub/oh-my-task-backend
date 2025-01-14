import { CookieOptions, Response } from 'express';

export const setCookie = (
  res: Response,
  name: string,
  value: string,
  options: CookieOptions,
) => {
  const secure = process.env.NODE_ENV === 'production';
  res.cookie(name, value, { ...options, secure });
};

export const clearCookie = (res: Response, name: string) => {
  res.clearCookie(name);
};
