import { Industry } from '../../generated/prisma';
import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';

export async function seedIndustry() {
  const fk = faker;

  const industries: Industry[] = Array.from({ length: 10 }, (_, index) => {
    const name = fk.commerce.department();

    return {
      id: index + 1,
      name: name,
      slug: fk.helpers.slugify(name.toLowerCase()),
      description: fk.lorem.lines(2),
    };
  });

  await prisma.industry.createMany({
    data: industries,
    skipDuplicates: true,
  });
}
