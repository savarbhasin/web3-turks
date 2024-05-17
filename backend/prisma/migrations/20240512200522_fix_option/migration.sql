/*
  Warnings:

  - You are about to drop the column `option` on the `Option` table. All the data in the column will be lost.
  - Added the required column `option_id` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "option";

-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "option_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
