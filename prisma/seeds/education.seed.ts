import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';
import { Education } from '../../generated/prisma';

dotenv.config();

export async function seedEducation() {
  const fk = faker;

  const data: Education[] = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: fk.company.name(),
    map: fk.internet.url(),
    slug: fk.helpers.slugify(fk.company.name().toLowerCase()),
  }));

  await prisma.education.createMany({
    data,
  });
}
