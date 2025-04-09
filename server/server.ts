import express, { Request, NextFunction, Response } from "express";
import endpoints from '../endpoints.json' assert {type: 'json'};
const app = express();

// endpoints documentation:
app.get("/api", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await res.status(200).json({endpoints});
    return data;
  } catch (err) {
    next(err)
  }
});

export default app;
