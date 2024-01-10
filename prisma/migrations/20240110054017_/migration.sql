/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Authors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Authors_email_key" ON "Authors"("email");
