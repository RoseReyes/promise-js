const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
];

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;

      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Something went wrong.');
      }
    }, 2000);
  });
};

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
};

const showError = (error) => {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  h3.style.color = 'red';
  document.getElementById('posts').appendChild(h3);
};

createPost({title: 'Post Three', body: 'This is post'})
  .then(getPosts)
  .catch(showError);
