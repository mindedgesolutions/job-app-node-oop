/*
  Warnings:

  - You are about to drop the `CadidateProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CadidateProfile" DROP CONSTRAINT "CadidateProfile_userId_fkey";

-- DropTable
DROP TABLE "CadidateProfile";

-- CreateTable
CREATE TABLE "CandidateProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "openToWork" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "CandidateProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CandidateProfile_userId_key" ON "CandidateProfile"("userId");

-- AddForeignKey
ALTER TABLE "CandidateProfile" ADD CONSTRAINT "CandidateProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
