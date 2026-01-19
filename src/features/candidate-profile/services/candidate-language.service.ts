import { prisma } from '@/prisma';
import { candidateProfileService } from '@/candidate/services/candidate-profile.service';
import { CandidateLanguage, CandidateProfile, Level } from 'generated/prisma';

class CandidateLanguageService {
  public async create(
    requestBody: any,
    currentUser: UserPayload
  ): Promise<CandidateLanguage> {
    const { languageName, level } = requestBody;

    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const candidateLanguage = await prisma.candidateLanguage.create({
      data: {
        candidateProfileId: candidateProfile.id,
        languageName,
        level,
      },
    });

    return candidateLanguage;
  }

  // ----------------------------------------------

  public async readMyLanguages(
    currentUser: UserPayload
  ): Promise<CandidateLanguage[]> {
    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const candidateLanguages = await prisma.candidateLanguage.findMany({
      where: { candidateProfileId: candidateProfile.id },
    });

    return candidateLanguages;
  }

  // ----------------------------------------------

  public async readAll(): Promise<CandidateLanguage[]> {
    const candidateLanguages = await prisma.candidateLanguage.findMany();

    return candidateLanguages;
  }

  // ----------------------------------------------

  public async updateLevel(
    level: Level,
    languageName: string,
    currentUser: UserPayload
  ): Promise<CandidateLanguage> {
    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const candidateLanguage = await prisma.candidateLanguage.update({
      where: {
        candidateProfileId_languageName: {
          candidateProfileId: candidateProfile.id,
          languageName,
        },
      },
      data: { level },
    });

    return candidateLanguage;
  }
}

export const candidateLanguageService: CandidateLanguageService =
  new CandidateLanguageService();
