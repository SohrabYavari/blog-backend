import { Request, NextFunction, Response } from "express";
import { fetchUsers } from "../models/users.models.ts";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await fetchUsers();

    if (!users || users.length === 0) {
      res.status(404).send({ msg: "No users found" });
    }

    res.status(200).send({ users });
  } catch (error) {
    console.error("Error loading user", error);
    next(error);
  }
};
