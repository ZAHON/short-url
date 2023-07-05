/*
  Warnings:

  - A unique constraint covering the columns `[id,userId,shortLink]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Link_id_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_userId_shortLink_key" ON "Link"("id", "userId", "shortLink");
