import { Request, NextFunction, Response } from "express";
import { fetchBlogs } from "../models/blogs.models.ts";
import { BlogPosts } from "../../types/dataTypes.ts";

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const blogs: BlogPosts[] = await fetchBlogs();
    if (!blogs || blogs.length === 0) {
      res.status(404).send({ msg: "No blogs found" });
    }
    res.status(200).send({ blogs });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error loading blogs", error);
    } else {
      console.error("Unknown Error: ", error);
    }
    next(error);
  }
};
