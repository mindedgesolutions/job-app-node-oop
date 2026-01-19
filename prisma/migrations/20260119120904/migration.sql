/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Education` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Education_slug_key" ON "Education"("slug");
