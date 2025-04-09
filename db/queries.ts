import db from "./connection.ts";
import format from "pg-format";
import { convertTimestampToDate } from "../utils/utilFunctions.ts";

//* Types imports
import {
  BlogTopics,
  BlogComments,
  BlogPosts,
  BlogUsers,
} from "../types/dataTypes.ts";


//? Insert topics data into the database
export const topicsQueries = ( topicsData: BlogTopics[]) => {
  if (!topicsData.length) return Promise.resolve();

  const topicsMapped = topicsData.map((topic) => {
    return [topic.slug, topic.description];
  });

  const topicsFormatted = format(
    `INSERT INTO topics 
    (slug, description)
    VALUES %L;`,
    topicsMapped
  );

  return db.query(topicsFormatted);
};

//? Insert users data into the database
export const usersQueries = (usersData: BlogUsers[]) => {
  if (!usersData.length) return Promise.resolve();

  const usersMapped = usersData.map((user) => {
    return [user.username, user.name, user.avatar_url];
  });

  const usersFormatted = format(
    `INSERT INTO users
    (username, name, avatar_url)
    VALUES %L;`,
    usersMapped
  );

  return db.query(usersFormatted);
};

//? Insert blogs data into the database
export const blogsQueries = (blogsData: BlogPosts[]) => {
  if (!blogsData.length) return Promise.resolve();

  const blogsMapped = blogsData.map((blog) => {
    const { created_at } = convertTimestampToDate(blog);
    return [
      blog.title,
      blog.topic,
      blog.author,
      created_at,
      blog.votes,
      blog.blog_img_url,
      blog.body,
    ];
  });

  const blogsFormatted = format(
    `INSERT INTO blogs
    (title, topic, author, created_at, votes, blog_img_url, body)
    VALUES %L;`,
    blogsMapped
  );

  return db.query(blogsFormatted);
};

//? Insert comments data into the database
export const commentsQueries = (commentsData: BlogComments[]) => {
  if (!commentsData.length) return Promise.resolve();

  const commentsMapped = commentsData.map((comment) => {
    const { created_at } = convertTimestampToDate(comment);
    return [
      comment.body,
      comment.author,
      comment.blog_title,
      comment.votes ?? 0,
      created_at,
    ];
  });

  const commentsFormatted = format(
    `INSERT INTO comments
    (body, author, blog_id, votes, created_at)
    VALUES %L;`,
    commentsMapped
  );

  return db.query(commentsFormatted);
};
