import seed from "./seed.ts";
import db from "../connection.ts";
import seedData from "../data/dev-data/index.ts";

seed(seedData)
  .then(() => {
    console.log("Data seeding completed.");
    return db.end();
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    return db.end();
  });
