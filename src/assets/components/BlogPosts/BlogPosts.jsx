
function BlogPosts (){
  const posts = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React and how to build dynamic UIs.',
      link: '/post/1',
    },
    {
      id: 2,
      title: 'State Management in React',
      description: 'Understand how to manage state in React applications.',
      link: '/post/2',
    },
    {
      id: 3,
      title: 'React Hooks Explained',
      description: 'A deep dive into React Hooks and their usage.',
      link: '/post/3',
    },
  ];

  return (
    <main className="blog-posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <a href={post.link} className="read-more">
            Read More
          </a>
        </div>
      ))}
    </main>
  );
};

export default BlogPosts;