import {
  CandidateEducation,
  CandidateProfile,
  Education,
} from 'generated/prisma';
import { candidateProfileService } from '@/candidate/services/candidate-profile.service';
import { prisma } from '@/prisma';
import { NotFoundException } from '@/globals/core/error.core';
import { CandidateEducationDTO } from '@/candidate/interfaces/candidate-education.interface';

class CandidateEducationService {
  public async create(
    requestBody: CandidateEducationDTO,
    currentUser: UserPayload,
  ) {
    const { educationId, major, degree, yearStart, yearEnd } = requestBody;

    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const checkEducation: Education | null =
      await this.findEducation(educationId);

    if (!checkEducation) {
      throw new NotFoundException('Education not found');
    }

    const education = await prisma.candidateEducation.create({
      data: {
        candidateProfileId: candidateProfile.id,
        educationId,
        major,
        degree,
        yearStart,
        yearEnd,
      },
    });

    return education;
  }

  // -----------------------------------

  public async readAll(): Promise<CandidateEducation[]> {
    const educations = await prisma.candidateEducation.findMany();

    return educations;
  }

  // -----------------------------------

  public async readMyEducation(currentUser: UserPayload) {
    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const education = await prisma.candidateEducation.findMany({
      where: { candidateProfileId: candidateProfile.id },
    });

    return education;
  }

  // -----------------------------------

  public async update(
    requestBody: CandidateEducationDTO,
    currentUser: UserPayload,
  ) {
    const { major, degree, yearStart, yearEnd } = requestBody;

    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const checkEducation: Education | null = await this.findEducation(
      Number(requestBody.educationId),
    );

    if (!checkEducation) {
      throw new NotFoundException('Education not found');
    }

    const education = await prisma.candidateEducation.update({
      where: {
        candidateProfileId_educationId: {
          candidateProfileId: candidateProfile.id,
          educationId: Number(requestBody.educationId),
        },
      },
      data: {
        major,
        degree,
        yearStart,
        yearEnd,
      },
    });

    return education;
  }

  // -----------------------------------

  public async delete(
    educationId: number,
    currentUser: UserPayload,
  ): Promise<void> {
    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    await prisma.candidateEducation.delete({
      where: {
        candidateProfileId_educationId: {
          candidateProfileId: candidateProfile.id,
          educationId: educationId,
        },
      },
    });

    return;
  }

  // -----------------------------------

  private findEducation(educationId: number): Promise<Education | null> {
    const data = prisma.education.findUnique({ where: { id: educationId } });

    return data;
  }
}

export const candidateEducationService: CandidateEducationService =
  new CandidateEducationService();
