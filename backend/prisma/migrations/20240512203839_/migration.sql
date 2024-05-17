/*
  Warnings:

  - You are about to drop the column `done` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address]` on the table `Worker` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "done",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "address" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Worker_address_key" ON "Worker"("address");
