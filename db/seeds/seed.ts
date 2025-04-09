import db from "../connection.ts";

// Import table creation functions
import {
  createBlogs,
  createComments,
  createTopics,
  createUsers,
} from "../createTables.ts";

// Import query functions for inserting data
import {
  topicsQueries,
  usersQueries,
  blogsQueries,
  commentsQueries,
} from "../queries.ts";

// Import interfaces
import {
  BlogTopics,
  BlogComments,
  BlogPosts,
  BlogUsers,
} from "../../types/dataTypes.ts";

interface SeedData {
  topicsData: BlogTopics[];
  usersData: BlogUsers[];
  blogsData: BlogPosts[];
  commentsData: BlogComments[];
}

const seed = async (seedData: SeedData): Promise<void> => {
  // Extract data from the parameter
  const { topicsData, usersData, blogsData, commentsData } = seedData;
  
  // Drop existing tables in reverse order (to respect foreign key constraints)
  await db.query(`DROP TABLE IF EXISTS comments`);
  await db.query(`DROP TABLE IF EXISTS blogs`);
  await db.query(`DROP TABLE IF EXISTS users`);
  await db.query(`DROP TABLE IF EXISTS topics`);

  // Create tables in proper order
  await createTopics();
  await createUsers();
  await createBlogs();
  await createComments();

  // Populate tables with data
  await topicsQueries(topicsData);
  await usersQueries(usersData);
  await blogsQueries(blogsData);
  await commentsQueries(commentsData);
};

export default seed;