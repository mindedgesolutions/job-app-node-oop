import { prisma } from '@/prisma';
import { CompanyImage } from 'generated/prisma';
import fs from 'fs';

class CompanyImageService {
  public async add(companyId: number, files: Express.Multer.File[]) {
    try {
      let data = [] as CompanyImage[];

      await prisma.$transaction(async (tx) => {
        data = [];

        for (const file of files) {
          data.push({
            companyId,
            imageUrl: file.filename,
          } as CompanyImage);
        }

        await tx.companyImage.createMany({ data });
      });

      return data;
    } catch (error) {
      await Promise.all(
        files.map(async (file) => {
          fs.unlinkSync(`${file.path}`);
        }),
      );
    }
  }
}

export const companyImageService: CompanyImageService =
  new CompanyImageService();
