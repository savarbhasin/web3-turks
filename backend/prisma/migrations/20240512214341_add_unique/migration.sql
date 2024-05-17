/*
  Warnings:

  - You are about to drop the column `amount` on the `Submission` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[workerId,taskId]` on the table `Submission` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "amount";

-- CreateIndex
CREATE UNIQUE INDEX "Submission_workerId_taskId_key" ON "Submission"("workerId", "taskId");
