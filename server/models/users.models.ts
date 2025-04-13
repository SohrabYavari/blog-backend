import db from "../../db/connection.ts";

export const fetchUsers = async () => {
  const { rows } = await db.query(`SELECT * FROM users`);
  return rows;
};
