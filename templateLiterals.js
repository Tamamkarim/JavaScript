const posts = [
    {
      title: "Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Post 2",
      content: "Pellentesque ac magna ut mi rhoncus venenatis."
    },
    {
      title: "Post 3",
      content: "Quisque bibendum lacus a tellus varius, vel fringilla justo sodales."
    }
  ];

  const container = document.getElementById("posts");

  posts.forEach(post => {
    const html = `
      <article>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </article>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
