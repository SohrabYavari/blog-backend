import { Request, NextFunction, Response } from "express";
import { fetchBlogs } from "../models/blogs.models.ts";


export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogs = await fetchBlogs();
    if (!blogs || blogs.length === 0) {
      return res.status(404).send({ msg: "No blogs found" });
    }
    res.status(200).send({ blogs });
  } catch (err) {
    next(err);
  }
};

