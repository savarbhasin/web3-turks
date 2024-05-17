/*
  Warnings:

  - You are about to drop the column `payoutData` on the `Payouts` table. All the data in the column will be lost.
  - Added the required column `payoutDate` to the `Payouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payouts" DROP COLUMN "payoutData",
ADD COLUMN     "payoutDate" TIMESTAMP(3) NOT NULL;
