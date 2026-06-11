"use server";

import { FormValues } from "./createPost";

export const getPost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export const getUserData = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data;
};

export const getDogImage = async () => {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`, {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data;
};

export const deletePost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};
export const createPost = async (postData: FormValues) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const data = await res.json();
  return data;
};
