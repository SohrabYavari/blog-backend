import seed from "./seed.ts";
import db from "../connection.ts";
import seedData from "../data/test-data/index.ts";

seed(seedData)
  .then(() => {
    return db.end();
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    return db.end();
  });
