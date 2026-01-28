import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';

export async function seedJobRole() {
  const fk = faker;

  const jobRoles = Array.from({ length: 10 }, (_, index) => {
    const name = fk.person.jobTitle();

    return {
      name: name,
      slug: fk.helpers.slugify(name.toLowerCase()),
      description: null,
    };
  });

  await prisma.jobRole.createMany({
    data: jobRoles,
    skipDuplicates: true,
  });
}
