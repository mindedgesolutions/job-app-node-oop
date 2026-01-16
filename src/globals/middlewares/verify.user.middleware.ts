import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '@/core/error.core';
import jsonwebtoken from 'jsonwebtoken';

export async function verifyUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req?.cookies['jp']) {
      throw new BadRequestException('No token found');
    }
    const decoded = jsonwebtoken.verify(
      req.cookies['jp'],
      process.env.JWT_SECRET!
    );
    const { id, name, email, role } = decoded as UserPayload;

    req.currentUser = { id, name, email, role };

    next();
  } catch (error) {
    throw new BadRequestException('No token found');
  }
}
