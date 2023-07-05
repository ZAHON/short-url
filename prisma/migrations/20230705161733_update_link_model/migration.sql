/*
  Warnings:

  - You are about to drop the column `shortLink` on the `Link` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId,key]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Link_id_userId_shortLink_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "shortLink",
ADD COLUMN     "key" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_key_key" ON "Link"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_userId_key_key" ON "Link"("id", "userId", "key");
