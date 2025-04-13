import { Request, NextFunction, Response } from "express";
import { fetchTopics } from "../models/topics.models.ts";
import { BlogTopics } from "../../types/dataTypes.ts";



export const getTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const topics: BlogTopics[] = await fetchTopics();

    if (!topics || topics.length === 0) {
      res.status(404).send({ msg: "No topics found" });
    }

    res.status(200).send({ topics });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error loading topics", error);
    } else {
      console.error("Unknown Error: ", error);
    }
    next(error);
  }
};
