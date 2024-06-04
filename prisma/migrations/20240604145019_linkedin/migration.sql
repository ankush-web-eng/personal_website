-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Programming', 'Growth', 'Life');

-- CreateTable
CREATE TABLE "Ghost" (
    "id" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "content" TEXT[],

    CONSTRAINT "Ghost_pkey" PRIMARY KEY ("id")
);
