/*
  Warnings:

  - You are about to drop the column `status` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Worker` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "status",
ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Worker" DROP COLUMN "name";
