import { createClient } from "npm:@libsql/client/sqlite3";
import { drizzle } from "npm:drizzle-orm/libsql";
import * as schema from "./schema.ts";

const dbUrl = "file:local.db";

const client = createClient({
  url: dbUrl,
});

export const sqliteDB = drizzle(client, { schema });
