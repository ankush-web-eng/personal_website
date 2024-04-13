-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "para1" TEXT,
    "para2" TEXT,
    "para3" TEXT,
    "para4" TEXT,
    "para5" TEXT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
