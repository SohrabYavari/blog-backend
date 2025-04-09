//! express IMPORTS
import express, { Request, NextFunction, Response } from "express";
const app = express();

//! endpoints IMPORTS
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const endpoints = require("../endpoints.json");

//? endpoints documentation:
app.get("/api", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await res.status(200).json({ endpoints });
    return data;
  } catch (err) {
    next(err);
  }
});

export default app;
