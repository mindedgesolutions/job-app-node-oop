import { NextFunction, Request, Response } from 'express';
import { ForbiddenException } from '@/core/error.core';

export function allowAccess(...roles: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.currentUser.role)) {
      return next(new ForbiddenException(`You're not authorized to access`));
    }
    return next();
  };
}
