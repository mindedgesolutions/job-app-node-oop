import { prisma } from '../../src/prisma';
import dotenv from 'dotenv';

dotenv.config();

export async function seedLanguage() {
  const languages = [
    { name: 'english' },
    { name: 'hindi' },
    { name: 'bengali' },
  ];

  await prisma.language.createMany({
    data: languages,
  });
}
