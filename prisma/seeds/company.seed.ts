import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';

export async function seedCompany() {
  const fk = faker;
  const recruiters = Array.from({ length: 10 }, (_, index) => index + 6);

  let companies = Array.from({ length: 50 }, () => ({
    name: fk.company.name(),
    description: fk.lorem.lines(2),
    address: fk.location.streetAddress(),
    teamSize: fk.number.int({ min: 100, max: 100000 }),
    estDate: fk.date.past({ years: 5 }),
    websiteUrl: fk.internet.url(),
    mapLink: fk.internet.url(),
    userId: fk.helpers.arrayElement(recruiters),
  }));

  await prisma.company.createMany({
    data: companies,
  });
}
