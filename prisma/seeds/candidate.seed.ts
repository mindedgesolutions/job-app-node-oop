import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Role, Gender } from '../../generated/prisma';

dotenv.config();

export async function seedCandidate() {
  const fk = faker;
  const password = await bcrypt.hash(
    'password',
    Number(process.env.SALT_ROUNDS)
  );
  const candidateCount = 50;

  for (let i = 0; i < candidateCount; i++) {
    const fullName = fk.person.fullName();
    const gender = fk.helpers.arrayElement([
      Gender.MALE,
      Gender.FEMALE,
      Gender.OTHER,
    ]);

    await prisma.user.create({
      data: {
        name: fullName,
        email: fk.internet.email(),
        password,
        role: Role.CANDIDATE,
        candidateProfile: {
          create: {
            fullName: fullName,
            gender,
            phone: fk.phone.number(),
            cv: 'NA',
            birthday: fk.date.past({ years: 30 }),
            address: fk.location.streetAddress(),
          },
        },
      },
    });
  }
}
