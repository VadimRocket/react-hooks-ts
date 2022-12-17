import { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Typing of Fetch with Async and Await
async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<Post>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | unknown>('');

  const fetchPost = async () => {
    const post = await http<Post>(url);
    setData(post);
  };

  useEffect(() => {
    try {
      fetchPost();
    } catch (error: unknown) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, error };
};
