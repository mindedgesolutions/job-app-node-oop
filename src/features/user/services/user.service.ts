import { BadRequestException } from '@/globals/core/error.core';
import { prisma } from '@/prisma';
import bcrypt from 'bcrypt';
import { User } from 'generated/prisma';
import { UserDTO } from '@/user/interfaces/user.interface';

class UserService {
  // ---------------------------------

  public async createUser(requestBody: UserDTO) {
    const { name, email, password, role } = requestBody;

    return prisma.$transaction(async (tx) => {
      const isEmailExists = await tx.user.findUnique({
        where: { email },
      });

      if (isEmailExists) throw new BadRequestException('Email already exists');

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: role as any,
        },
      });

      return user;
    });
  }

  // ---------------------------------

  public async getAll(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }
}
export const userService: UserService = new UserService();
