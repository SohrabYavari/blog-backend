import request from "supertest";
import seed from "../../db/seeds/seed.ts";
import seedData from "../../db/data/test-data/index.ts";
import db from "../../db/connection.ts";
import app from "../../server/server.ts";
import { BlogPosts } from "../../types/dataTypes.ts";

beforeEach(() => {
  return seed(seedData);
});

afterAll(() => {
  return db.end();
});

describe("Integration Tests for /api/blogs api endpoint", () => {
  it("should get all blogs from database", async () => {
    // supertest request
    const res: request.Response = await request(app).get("/api/blogs").expect(200);

    // 
    const { blogs } = res.body as { blogs: BlogPosts[] }; 

    expect(Array.isArray(blogs)).toBe(true);
    expect(blogs.length).toBeGreaterThan(0);


    blogs.forEach((blog) => {
        expect(typeof blog.title).toBe("string");
        expect(typeof blog.author).toBe("string");
        expect(typeof blog.created_at).toBe("string");
        expect(typeof blog.votes).toBe("number");
        expect(typeof blog.blog_img_url).toBe("string");
        expect(typeof blog.comment_count).toBe("string");
      });
    // blogs.forEach((blog) => {
    //   expect(blog).toEqual(
    //     expect.objectContaining({
    //       title: expect.any(String),
    //       blog_id: expect.any(Number),
    //       topic: expect.any(String),
    //       author: expect.any(String),
    //       body: expect.any(String),
    //       created_at: expect.anything(),
    //       votes: expect.any(Number),
    //       blog_img_url: expect.any(String),
    //     })
    //   );
    // });
  });
});
