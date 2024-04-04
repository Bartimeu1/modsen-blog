import { BASE_URL } from '@root/config';
import { IAuthorData, IPostData } from '@root/types/api';

export const getAllPosts = async (): Promise<IPostData[]> => {
  const response = await fetch(`${BASE_URL}/posts`);

  const posts = await response.json();

  return posts;
};

export const getLimitedPosts = async (
  limit: number,
  start: number = 1,
): Promise<IPostData[]> => {
  const response = await fetch(
    `${BASE_URL}/posts?_start=${start}&_limit=${limit}`,
  );

  const posts = await response.json();

  return posts;
};

export const getPostById = async (id: number): Promise<IPostData> => {
  const response = await fetch(`${BASE_URL}/posts?id=${id}`);

  const post = await response.json();

  return post[0];
};

export const getPostsByCategory = async (
  category: string,
  tags: string[] = ['experience'],
): Promise<IPostData[]> => {
  let queryString = `${BASE_URL}/posts?category=${category}`;

  if (tags.length > 0) {
    const tagsString = tags.join(',');
    queryString += `&tags_like=${tagsString}`;
  }

  const response = await fetch(queryString);

  const posts = await response.json();

  return posts;
};

export const getPostsByAuthorId = async (id: string): Promise<IPostData[]> => {
  const response = await fetch(`${BASE_URL}/posts?authorId=${id}`);

  const posts = await response.json();

  return posts;
};

export const getLimitedAuthors = async (
  limit: number,
  start: number = 1,
): Promise<IAuthorData[]> => {
  const response = await fetch(
    `${BASE_URL}/authors?_start=${start}&_limit=${limit}`,
  );

  const authors = await response.json();

  return authors;
};

export const getAuthorById = async (id: string): Promise<IAuthorData> => {
  const response = await fetch(`${BASE_URL}/authors?id=${id}`);

  const author = await response.json();

  return author[0];
};
