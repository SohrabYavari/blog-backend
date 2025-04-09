import db from "./connection.ts";

export const createTopics = () => {
  return db.query(`
    CREATE TABLE topics (
    slug VARCHAR(256) PRIMARY KEY NOT NULL,
    description VARCHAR(256) NOT NULL
    )`);
};

export const createUsers = () => {
  return db.query(`
    CREATE TABLE users (
    username VARCHAR(256) PRIMARY KEY NOT NULL,
    name VARCHAR(256) NOT NULL,
    avatar_url VARCHAR(1000) NOT NULL  
    )`);
};

export const createComments = () => {
  return db.query(`
    CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    blog_id INT REFERENCES blogs(blog_id),
    body TEXT NOT NULL,
    votes INT,
    author VARCHAR(256) REFERENCES users(username) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
};

export const createBlogs = () => {
  return db.query(`
    CREATE TABLE blogs (
    blog_id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    topic VARCHAR(256) REFERENCES topics(slug) ON DELETE CASCADE NOT NULL,
    author VARCHAR(256) REFERENCES users(username) ON DELETE CASCADE NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    votes INT,
    blog_img_url VARCHAR(1000)
    )`);
};
