/*
  Warnings:

  - You are about to drop the column `isCorrect` on the `Option` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "isCorrect",
ALTER COLUMN "option" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "title" DROP NOT NULL;
