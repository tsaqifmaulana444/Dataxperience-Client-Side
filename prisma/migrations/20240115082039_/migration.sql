/*
  Warnings:

  - Added the required column `type` to the `Agenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agenda" ADD COLUMN     "type" TEXT NOT NULL;
