/*
  Warnings:

  - You are about to drop the column `pathname` on the `Link` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId,slug]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Link_id_userId_pathname_key";

-- DropIndex
DROP INDEX "Link_pathname_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "pathname",
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_slug_key" ON "Link"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_userId_slug_key" ON "Link"("id", "userId", "slug");
