-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RoutePoint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "timeDeparture" DATETIME,
    "timeArrival" DATETIME,
    "routeId" INTEGER,
    CONSTRAINT "RoutePoint_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_RoutePoint" ("id", "name", "routeId", "timeArrival", "timeDeparture") SELECT "id", "name", "routeId", "timeArrival", "timeDeparture" FROM "RoutePoint";
DROP TABLE "RoutePoint";
ALTER TABLE "new_RoutePoint" RENAME TO "RoutePoint";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
