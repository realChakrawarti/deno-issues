import { migrate } from "npm:drizzle-orm/libsql/migrator";
import { sqliteDB } from "./db.ts";

async function migrateDb() {
  try {
    await migrate(sqliteDB, { migrationsFolder: "./migrations" });
    console.log("Migration successful.");
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Migration failed: ${err.message}.`);
      return;
    }
    console.log(`Migration failed: \n`, JSON.stringify(err));
  }
}

migrateDb();
