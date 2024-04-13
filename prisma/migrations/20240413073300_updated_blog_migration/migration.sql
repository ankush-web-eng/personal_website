/*
  Warnings:

  - Made the column `para1` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `para2` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `para3` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `para4` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `para5` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "para1" SET NOT NULL,
ALTER COLUMN "para2" SET NOT NULL,
ALTER COLUMN "para3" SET NOT NULL,
ALTER COLUMN "para4" SET NOT NULL,
ALTER COLUMN "para5" SET NOT NULL;
