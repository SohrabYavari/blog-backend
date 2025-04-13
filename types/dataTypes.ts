export type BlogPosts = {
  blog_id: number;
  title: string;
  topic: string;
  author: string;
  created_at: string | number;
  votes: number;
  blog_img_url: string;
  body: string;
  comment_count: number;
}

export type BlogComments = {
  blog_title: string;
  body: string;
  votes: number;
  author: string;
  created_at: string | number;
}

export type BlogUsers = {
  username: string;
  name: string;
  avatar_url: string;
}

export type BlogTopics = {
  slug: string;
  description: string;
}
