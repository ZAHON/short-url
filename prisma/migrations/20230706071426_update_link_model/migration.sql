/*
  Warnings:

  - You are about to drop the column `key` on the `Link` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pathname]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId,pathname]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pathname` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Link_id_userId_key_key";

-- DropIndex
DROP INDEX "Link_key_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "key",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pathname" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_pathname_key" ON "Link"("pathname");

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_userId_pathname_key" ON "Link"("id", "userId", "pathname");
