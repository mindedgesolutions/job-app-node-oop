import { prisma } from '../src/prisma';
import dotenv from 'dotenv';
import { seedAdmin } from './seeds/admin.seed';
import { seedRecruiter } from './seeds/recruiter.seed';
import { seedCandidate } from './seeds/candidate.seed';
import { seedLanguage } from './seeds/language.seed';
import { seedEducation } from './seeds/education.seed';
import { seedCompany } from './seeds/company.seed';
import { seedIndustry } from './seeds/industry.seed';

dotenv.config();

async function main() {
  await seedAdmin();
  await seedRecruiter();
  await seedCandidate();
  await seedLanguage();
  await seedEducation();
  await seedCompany();
  await seedIndustry();
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
