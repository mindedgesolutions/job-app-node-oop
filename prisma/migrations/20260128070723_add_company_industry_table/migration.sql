-- CreateTable
CREATE TABLE "CompanyIndustry" (
    "companyId" INTEGER NOT NULL,
    "industryId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyIndustry_companyId_industryId_key" ON "CompanyIndustry"("companyId", "industryId");

-- AddForeignKey
ALTER TABLE "CompanyIndustry" ADD CONSTRAINT "CompanyIndustry_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyIndustry" ADD CONSTRAINT "CompanyIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
