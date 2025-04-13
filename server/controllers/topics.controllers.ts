import { Request, NextFunction, Response } from "express";
import { fetchTopics } from "../models/topics.models.ts";

export const getTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const topics = await fetchTopics();

    if (!topics || topics.length === 0) {
      res.status(404).send({ msg: "No topics found" });
    }

    res.status(200).send({ topics });
  } catch (error) {
    console.error("Error loading user", error);
    next(error);
  }
};
