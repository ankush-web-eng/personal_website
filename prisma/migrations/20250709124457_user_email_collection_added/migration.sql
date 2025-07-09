-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verifyCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clients_email_key" ON "Clients"("email");
