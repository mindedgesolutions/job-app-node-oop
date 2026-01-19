import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Role } from '../../generated/prisma';

dotenv.config();

export async function seedRecruiter() {
  const fk = faker;
  const password = await bcrypt.hash(
    'password',
    Number(process.env.SALT_ROUNDS)
  );

  let recruiters = Array.from({ length: 10 }, () => ({
    name: fk.person.fullName(),
    email: fk.internet.email(),
    password,
    role: Role.RECRUITER,
  }));

  await prisma.user.createMany({
    data: recruiters,
  });
}
