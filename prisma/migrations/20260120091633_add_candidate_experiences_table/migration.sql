-- CreateTable
CREATE TABLE "CandidateExperience" (
    "id" SERIAL NOT NULL,
    "candidateProfileId" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "currentlyWorking" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CandidateExperience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CandidateExperience" ADD CONSTRAINT "CandidateExperience_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
