import db from "../../db/connection.ts";

export const fetchTopics = async () => {
  const { rows } = await db.query(`SELECT * FROM topics`);
  return rows;
};
