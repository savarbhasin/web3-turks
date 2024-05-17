-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Processing', 'Success', 'Failure');

-- CreateTable
CREATE TABLE "Payouts" (
    "id" SERIAL NOT NULL,
    "workerId" INTEGER NOT NULL,
    "signature" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Payouts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payouts" ADD CONSTRAINT "Payouts_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
