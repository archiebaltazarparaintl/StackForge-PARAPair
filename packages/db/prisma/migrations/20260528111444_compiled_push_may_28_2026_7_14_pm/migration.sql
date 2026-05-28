/*
  Warnings:

  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalizeFullname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmailVerification" DROP CONSTRAINT "EmailVerification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_replyToMessageId_fkey";

-- AlterTable
ALTER TABLE "EmailVerification" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "businessField" TEXT,
ADD COLUMN     "businessName" TEXT,
ADD COLUMN     "businessServices" TEXT,
ADD COLUMN     "cvUrl" TEXT,
ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "interestTags" TEXT[],
ADD COLUMN     "isBusinessAccount" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastActiveAt" TIMESTAMP(3),
ADD COLUMN     "location" TEXT,
ADD COLUMN     "normalizeFullname" TEXT NOT NULL,
ADD COLUMN     "profileCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER';

-- AddForeignKey
ALTER TABLE "EmailVerification" ADD CONSTRAINT "EmailVerification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_replyToMessageId_fkey" FOREIGN KEY ("replyToMessageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
