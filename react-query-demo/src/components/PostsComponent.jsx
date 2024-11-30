// PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Fetch function to get posts
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery(
    'posts',  // Query key
    fetchPosts,  // Fetch function
    {
      staleTime: 5 * 60 * 1000,  // Cache data for 5 minutes (staleTime)
      cacheTime: 10 * 60 * 1000, // Keep cached data for 10 minutes before garbage collection
      refetchOnWindowFocus: true, // Refetch data when window gains focus
      keepPreviousData: true, // Keep previous data while new data is loading
    }
  );

  // Loading and Error Handling
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {/* Refetch button */}
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
