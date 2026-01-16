import { NextFunction, Request, Response } from 'express';
import {
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
} from '@/core/error.core';
import { prisma } from '@/prisma';

export function checkPermission(model: any, foreignKey: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id: userId, role: userRole } = req.currentUser;
    const { id: entityId } = req.params;

    if (!userId) throw new UnauthorizedException(`You're not logged in`);

    const entity = await (prisma[model] as any).findUnique({
      where: { id: Number(entityId) },
    });

    if (!entity) throw new NotFoundException(`Data not found`);

    if (
      userRole !== 'ADMIN' &&
      userRole !== 'RECRUITER' &&
      Number(userId) !== Number(entity[foreignKey])
    ) {
      return next(
        new ForbiddenException(`You don't have permission to access`)
      );
    }
    return next();
  };
}
