-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "playerid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "totalpixels" INTEGER NOT NULL,
    "dailyrank" INTEGER NOT NULL,
    "dailypixels" INTEGER NOT NULL,
    "br" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

