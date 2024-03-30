import { IPostData, IAuthorData } from '@root/types/api';

export const getAllPosts = async (): Promise<IPostData[]> => {
  const response = await fetch(`${process.env.BASE_URL}/posts`, {
    cache: 'no-store',
  });

  const posts = await response.json();

  return posts;
};

export const getLimitedPosts = async (
  limit: number,
  start: number = 1,
): Promise<IPostData[]> => {
  const response = await fetch(
    `${process.env.BASE_URL}/posts?_start=${start}&_limit=${limit}`,
  );

  const posts = await response.json();

  return posts;
};

export const getPostById = async (id: number): Promise<IPostData> => {
  const response = await fetch(`${process.env.BASE_URL}/posts?id=${id}`);

  const post = await response.json();

  return post[0];
};

export const getPostsByCategory = async (
  category: string,
  tags: string[] = ['experience'],
): Promise<IPostData> => {
  let queryString = `${process.env.BASE_URL}/posts?category=${category}`;

  if (tags.length > 0) {
    const tagsString = tags.join(',');
    queryString += `&tags_like=${tagsString}`;
  }

  const response = await fetch(queryString, {
    cache: 'force-cache',
  });

  const posts = await response.json();

  return posts;
};

export const getPostsByAuthorId = async (id: string): Promise<IPostData[]> => {
  const response = await fetch(`${process.env.BASE_URL}/posts?authorId=${id}`);

  const posts = await response.json();

  return posts;
};

export const getAuthorById = async (id: string): Promise<IAuthorData> => {
  const response = await fetch(`${process.env.BASE_URL}/authors?id=${id}`, {
    cache: 'no-store',
  });

  const author = await response.json();

  return author[0];
};
