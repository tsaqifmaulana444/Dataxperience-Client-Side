-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_author_id_fkey";

-- AlterTable
ALTER TABLE "News" ALTER COLUMN "author_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Authors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
