import { NotFoundException } from '@/globals/core/error.core';
import { prisma } from '@/prisma';
import { CandidateProfile } from 'generated/prisma';
import { CandidateProfileDTO } from '@/candidate/interfaces/candidate-profile.interface';

class CandidateProfileService {
  public async readAll(): Promise<CandidateProfile[] | []> {
    const candidates: CandidateProfile[] =
      await prisma.candidateProfile.findMany();

    return candidates;
  }

  // ----------------------------------

  public async readOne(id: number): Promise<CandidateProfile> {
    const candidate: CandidateProfile | null =
      await prisma.candidateProfile.findUnique({
        where: { id },
      });

    if (!candidate) throw new NotFoundException('Candidate profile not found');

    return candidate;
  }

  // ----------------------------------

  public async create(
    requestBody: CandidateProfileDTO,
    currentUser: UserPayload
  ): Promise<CandidateProfile> {
    const { fullName, gender, phone, cv, birthday, address } = requestBody;
    const userId = Number(currentUser.id);

    return prisma.$transaction(async (tx) => {
      const profile = await tx.candidateProfile.create({
        data: {
          userId,
          fullName,
          gender,
          phone,
          cv,
          birthday: new Date(birthday),
          address,
        },
      });

      return profile;
    });
  }

  // ----------------------------------

  public async update(
    requestBody: CandidateProfileDTO,
    id: number
  ): Promise<CandidateProfile> {
    const { fullName, gender, phone, cv, birthday, address } = requestBody;

    const check = await prisma.candidateProfile.findUnique({
      where: { id },
    });

    if (!check) throw new NotFoundException('Candidate profile not found');

    const updated: CandidateProfile = await prisma.candidateProfile.update({
      where: { id },
      data: {
        fullName,
        gender,
        phone,
        cv,
        birthday: new Date(birthday),
        address,
      },
    });

    return updated;
  }

  // ----------------------------------

  public async delete(id: number): Promise<void> {
    const check = await prisma.candidateProfile.findUnique({
      where: { id },
    });

    if (!check) throw new NotFoundException('Candidate profile not found');

    await prisma.candidateProfile.delete({
      where: { id },
    });

    return;
  }

  // ----------------------------------

  public async toggleOpenToWork(
    openToWork: boolean,
    id: number
  ): Promise<void> {
    await this.readOne(id);

    await prisma.candidateProfile.update({
      where: { id },
      data: { openToWork },
    });
  }
}
export const candidateProfileService: CandidateProfileService =
  new CandidateProfileService();
