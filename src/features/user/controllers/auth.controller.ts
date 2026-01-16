import { Request, Response } from 'express';
import { authService } from '@/user/services/auth.service';
import { StatusCodes } from 'http-status-codes';
import { sendTokenToCookie } from '@/globals/helpers/cookie.helper';

class AuthController {
  public async signup(req: Request, res: Response) {
    const data = await authService.signup(req.body);

    return res.status(StatusCodes.CREATED).json({
      message: 'User created successfully',
      data,
    });
  }

  // ---------------------------------

  public async signin(req: Request, res: Response) {
    const data = await authService.signin(req.body);

    sendTokenToCookie(res, data.accessToken);

    return res.status(StatusCodes.OK).json({
      message: 'User signed in successfully',
      data: data.user,
    });
  }

  // ---------------------------------

  public async getCurrentUser(req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({
      message: 'Get current user successfully',
      data: req.currentUser,
    });
  }

  // ---------------------------------

  public async logout(req: Request, res: Response) {
    res.clearCookie('jp');

    return res.status(StatusCodes.OK).json({
      message: 'User logged out successfully',
    });
  }
}
export const authController: AuthController = new AuthController();
