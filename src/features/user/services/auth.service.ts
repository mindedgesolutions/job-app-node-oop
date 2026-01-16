import {
  BadRequestException,
  NotFoundException,
} from '@/globals/core/error.core';
import { generateJwt } from '@/globals/helpers/jwt.helper';
import { prisma } from '@/prisma';
import bcrypt from 'bcrypt';
import { User } from 'generated/prisma';
import { SigninDTO, SignupDTO } from '@/user/interfaces/auth.interface';

class AuthService {
  public async signup(requestBody: SignupDTO) {
    const { name, email, password } = requestBody;

    const check = await this.getUserByEmail(email);

    if (check) throw new BadRequestException(`Email already exists`);

    const saltRounds = 10;
    const newPassword = await bcrypt.hash(password, saltRounds);

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: newPassword,
          role: 'CANDIDATE',
        },
      });

      const tokenData = {
        id: user.id.toString(),
        name: user.name!,
        email: user.email,
        role: user.role,
      };
      const accessToken = generateJwt(tokenData);

      return { user: tokenData, accessToken };
    });
  }

  // ---------------------------------

  public async signin(requestBody: SigninDTO) {
    const { email, password } = requestBody;

    return prisma.$transaction(async (tx) => {
      const user = await this.getUserByEmail(email);

      if (!user) throw new NotFoundException(`Email doesn't exist`);

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) throw new BadRequestException('Invalid password');

      const tokenData = {
        id: user.id.toString(),
        name: user.name!,
        email: user.email,
        role: user.role,
      };
      const accessToken = generateJwt(tokenData);

      return { user: tokenData, accessToken };
    });
  }

  // ---------------------------------

  private async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  }
}
export const authService: AuthService = new AuthService();
