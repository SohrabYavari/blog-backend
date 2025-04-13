import { Request, NextFunction, Response } from "express";
import { fetchUsers } from "../models/users.models.ts";
import { BlogUsers } from "../../types/dataTypes.ts";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users: BlogUsers[] = await fetchUsers();

    if (!users || users.length === 0) {
      res.status(404).send({ msg: "No users found" });
    }

    res.status(200).send({ users });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error loading users", error);
    } else {
      console.error("Unknown Error: ", error);
    }
    next(error);
  }
};
