import { BlogPosts } from "./types/dataTypes";

interface Endpoint {
  description: string;
  queries?: any[]; // You can specify query parameters if needed
  'example-response'?: BlogPosts[];
}

const apiDocumentation: { [key: string]: Endpoint } = {
  'GET /api': {
    description: 'Documentation of the endpoints available for this backend.',
  },
  'GET /api/blogs': {
    description: 'This endpoint will serve up all the blogs that are available on the database.',
    queries: [],
    'example-response': [
      {
        blog_id: 1,
        title: 'title one',
        topic: 'slug one',
        author: 'person two',
        created_at: 20250321155126,
        votes: 0,
        blog_img_url: '',
        body: 'markdown formatted post',
        comment_count: 0,
      },
      {
        blog_id: 2,
        title: 'title two',
        topic: 'slug two',
        author: 'person one',
        created_at: 20250302125005,
        votes: 0,
        blog_img_url: '',
        body: 'markdown formatted post',
        comment_count: 0,
      },
    ],
  },
};

export default apiDocumentation;
