import { sqliteTable } from "drizzle-orm/sqlite-core/table";
import { integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm/sql";

import { InferSelectModel } from "drizzle-orm/table";

const createdUpdatedFields = {
  createdAt: text("createdAt").notNull().default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text("updatedAt"),
};

const tests = sqliteTable("tests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description"),
  ...createdUpdatedFields,
});

export { tests };

type Test = InferSelectModel<typeof tests>;

export type { Test };
