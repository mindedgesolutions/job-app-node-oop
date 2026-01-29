import slugify from 'slugify';
import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';
import { JobStatus } from '../../generated/prisma';

export async function seedJob() {
  const fk = faker;
  const jobRoleId = Array.from({ length: 10 }, (_, index) => index + 1);
  const status = ['PENDING', 'ACTIVE', 'EXPIRED', 'REJECTED'];

  let jobs = Array.from({ length: 50 }, () => {
    const title = fk.person.jobTitle();
    const slug = slugify(title, { lower: true });

    return {
      companyId: 2,
      userId: 6,
      jobRoleId: fk.helpers.arrayElement(jobRoleId),
      title,
      description: fk.lorem.lines(2),
      slug,
      status: fk.helpers.arrayElement(status) as JobStatus,
      minSalary: fk.number.int({ min: 50000, max: 750000 }),
      maxSalary: fk.number.int({ min: 80000, max: 1000000 }),
    };
  });

  await prisma.job.createMany({
    data: jobs,
    skipDuplicates: true,
  });
}
