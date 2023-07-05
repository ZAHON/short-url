-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "password" TEXT,
    "title" TEXT,
    "description" TEXT,
    "image" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_userId_key" ON "Link"("id", "userId");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
