//! express IMPORTS
import express, { Request, NextFunction, Response } from "express";
const app = express();

//! endpoints IMPORT
import endpoints from "../endpoints.ts";

//! controllers IMPORTS
import { getBlogs } from "./controllers/blogs.controllers.ts";
import { getUsers } from "./controllers/users.controllers.ts";
import { getTopics } from "./controllers/topics.controllers.ts";

//? endpoints documentation:
app.get("/api", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await res.status(200).send({ endpoints });
    return data;
  } catch (err) {
    next(err);
  }
});

//* blogs endpoints:
app.get("/api/blogs", getBlogs);

//* users endpoints:
app.get("/api/users", getUsers);

//* topics endpoints:
app.get("/api/topics", getTopics);

export default app;
