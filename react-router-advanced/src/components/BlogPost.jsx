import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Retrieve the dynamic ID parameter from the URL
  
  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}

export default BlogPost;
