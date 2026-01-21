-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "teamSize" INTEGER NOT NULL,
    "estDate" DATE NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "websiteUrl" TEXT,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "mapLink" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
