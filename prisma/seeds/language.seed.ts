import { prisma } from '../../src/prisma';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Role } from '../../generated/prisma';

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
