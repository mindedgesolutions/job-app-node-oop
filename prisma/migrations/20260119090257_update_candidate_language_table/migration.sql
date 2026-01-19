-- CreateEnum
CREATE TYPE "Level" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED');

-- AlterTable
ALTER TABLE "CandidateLanguage" ADD COLUMN     "level" "Level" NOT NULL DEFAULT 'BASIC';
