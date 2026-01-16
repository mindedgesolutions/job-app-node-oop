import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { userService } from '@/user/services/user.service';

class UserController {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAll();

      return res
        .status(StatusCodes.OK)
        .json({ message: 'Get all users', data: users });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Something went wrong' });
    }
  }

  // ---------------------------------

  public async create(req: Request, res: Response, next: NextFunction) {
    const data = await userService.createUser(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'User created', data });
  }
}
export const userController: UserController = new UserController();
