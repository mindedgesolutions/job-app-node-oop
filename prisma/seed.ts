import { prisma } from '../src/prisma';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Role, Gender } from '../generated/prisma';

dotenv.config();

async function main() {
  const fk = faker;
  const password = await bcrypt.hash(
    'password',
    Number(process.env.SALT_ROUNDS)
  );

  let admins = Array.from({ length: 5 }, () => ({
    name: fk.person.fullName(),
    email: fk.internet.email(),
    password,
    role: Role.ADMIN,
  }));

  let recruiters = Array.from({ length: 10 }, () => ({
    name: fk.person.fullName(),
    email: fk.internet.email(),
    password,
    role: Role.RECRUITER,
  }));

  await prisma.user.createMany({
    data: [...admins, ...recruiters],
  });

  // For candidates ----------------
  const candidateCount = 20;

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

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
