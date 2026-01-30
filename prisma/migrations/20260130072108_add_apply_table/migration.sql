-- CreateEnum
CREATE TYPE "AppStatus" AS ENUM ('APPLIED', 'UNDER_REVIEW', 'INTERVIEW_SCHEDULED', 'OFFERED', 'REJECTED');

-- CreateTable
CREATE TABLE "Apply" (
    "jobId" INTEGER NOT NULL,
    "candidateProfileId" INTEGER NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "AppStatus" NOT NULL DEFAULT 'APPLIED',

    CONSTRAINT "Apply_pkey" PRIMARY KEY ("jobId","candidateProfileId")
);

-- AddForeignKey
ALTER TABLE "Apply" ADD CONSTRAINT "Apply_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apply" ADD CONSTRAINT "Apply_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
