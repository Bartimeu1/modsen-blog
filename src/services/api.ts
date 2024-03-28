import { IPostData } from '@root/types/api';

export const getAllPosts = async (): Promise<IPostData[]> => {
  const response = await fetch(`${process.env.BASE_URL}/posts`, {
    cache: 'force-cache',
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
    {
      cache: 'force-cache',
    },
  );

  const posts = await response.json();

  return posts;
};
