import db from "../../db/connection.ts";
import { BlogTopics } from "../../types/dataTypes.ts";

export const fetchTopics = async (): Promise<BlogTopics[]> => {
  const { rows } = await db.query(`SELECT * FROM topics`);
  return rows;
};
