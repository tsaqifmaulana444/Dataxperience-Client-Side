/*
  Warnings:

  - You are about to drop the column `category_id` on the `News` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_category_id_fkey";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "category_id";

-- CreateTable
CREATE TABLE "_CategoriesToNews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriesToNews_AB_unique" ON "_CategoriesToNews"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriesToNews_B_index" ON "_CategoriesToNews"("B");

-- AddForeignKey
ALTER TABLE "_CategoriesToNews" ADD CONSTRAINT "_CategoriesToNews_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriesToNews" ADD CONSTRAINT "_CategoriesToNews_B_fkey" FOREIGN KEY ("B") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;
