import db from "../../db/connection.ts";

export const fetchBlogs = async () => {
  const { rows } = await db.query(`
     SELECT 
      blogs.blog_id, 
      blogs.title, 
      blogs.topic, 
      blogs.author, 
      blogs.votes, 
      blogs.created_at, 
      blogs.blog_img_url, 
      COUNT(comments.blog_id) AS comment_count 
    FROM blogs 
    LEFT JOIN comments 
      ON blogs.blog_id = comments.blog_id 
    GROUP BY blogs.blog_id
    `);

  return rows;
};