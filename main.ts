import { sqliteDB } from "./db.ts";
import { tests } from "./schema.ts";

async function createTest() {
  const testId = await sqliteDB.insert(tests).values({
    title: "Test title",
    description: "Test decription",
  }).returning({ id: tests.id });

  console.log("Created a test with ID: ", testId);
}

if (import.meta.main) {
  await createTest();
}
