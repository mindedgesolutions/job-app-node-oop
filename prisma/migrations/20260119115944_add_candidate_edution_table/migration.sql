-- CreateTable
CREATE TABLE "CandidateEducation" (
    "candidateProfileId" INTEGER NOT NULL,
    "educationId" INTEGER NOT NULL,
    "major" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "yearStart" INTEGER NOT NULL,
    "yearEnd" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CandidateEducation_candidateProfileId_educationId_key" ON "CandidateEducation"("candidateProfileId", "educationId");

-- AddForeignKey
ALTER TABLE "CandidateEducation" ADD CONSTRAINT "CandidateEducation_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEducation" ADD CONSTRAINT "CandidateEducation_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
