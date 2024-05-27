-- CreateTable
CREATE TABLE "Inquiries" (
    "id" TEXT NOT NULL,
    "fullname" TEXT,
    "email" TEXT,
    "phone" INTEGER,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inquiries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Inquiries_email_key" ON "Inquiries"("email");
