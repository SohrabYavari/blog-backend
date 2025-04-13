import db from "../../db/connection.ts";
import { BlogUsers } from "../../types/dataTypes.ts";

export const fetchUsers = async (): Promise<BlogUsers[]> => {
  const { rows } = await db.query(`SELECT * FROM users`);
  return rows;
};
