import { Request, Response, NextFunction } from 'express';

export const UserTest = (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json('users router test');
  } catch (e) {
    next(e);
  }
};
