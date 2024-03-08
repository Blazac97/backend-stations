-- CreateTable
CREATE TABLE "RoutePoint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "timeDeparture" DATETIME NOT NULL,
    "timeArrival" DATETIME NOT NULL,
    "routeId" INTEGER,
    CONSTRAINT "RoutePoint_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
