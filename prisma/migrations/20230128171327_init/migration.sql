-- CreateTable
CREATE TABLE "Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "genus" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "commonName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "soilType" TEXT NOT NULL,
    "waterRequirements" TEXT NOT NULL,
    "lightRequirements" TEXT NOT NULL,
    "propagationMethod" TEXT NOT NULL,
    "uses" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
