import { prisma } from '@/prisma';
import { CompanyImage } from 'generated/prisma';
import fs from 'fs';
import { NotFoundException } from '@/globals/core/error.core';

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

  // ----------------------------------

  public async readAll(companyId: number) {
    const data = await prisma.companyImage.findMany({
      where: { companyId },
    });

    return data;
  }

  // ----------------------------------

  public async delete(imageId: number) {
    try {
      const image = await prisma.companyImage.findFirst({
        where: { id: imageId },
      });

      if (!image) throw new NotFoundException('Image not found');

      fs.unlinkSync(`./uploads/companies/${image.imageUrl}`);

      await prisma.companyImage.delete({
        where: { id: imageId },
      });

      return;
    } catch (error) {
      console.log(error);
    }
  }
}

export const companyImageService: CompanyImageService =
  new CompanyImageService();
