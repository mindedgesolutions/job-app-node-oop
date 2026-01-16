-- CreateTable
CREATE TABLE "CadidateProfile" (
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

    CONSTRAINT "CadidateProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CadidateProfile_userId_key" ON "CadidateProfile"("userId");

-- AddForeignKey
ALTER TABLE "CadidateProfile" ADD CONSTRAINT "CadidateProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
