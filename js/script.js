'use strict';

const postContainer = document.getElementById('postContainer');
const postIdInput = document.getElementById('postIdInput');
const searchPostButton = document.getElementById('searchPost');

searchPostButton.addEventListener('click', () => {
  const postId = parseInt(postIdInput.value, 10);
  if (!postId || postId < 1 || postId > 100) {
    postContainer.innerHTML = 'number should be 1-100';
    return;
  }
  getPostById(postId);
});

const getPostById = async (id) => {
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!postResponse.ok) {
    console.error('post not found');
  }
  const post = await postResponse.json();

  displayPost(post);
};

const displayPost = (post) => {
  postContainer.innerHTML = `
    <div">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button id="loadComments">Load Comments</button>
      <div id="commentsContainer"></div>
    </div>`;
  const loadCommentsButton = document.getElementById('loadComments');
  loadCommentsButton.addEventListener('click', () => fetchComments(post.id));
};
const fetchComments = async (postId) => {
  const commentsContainer = document.getElementById('commentsContainer');

  const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  if (!commentsResponse.ok) {
    console.error('comment not found');
  }
  const comments = await commentsResponse.json();
  commentsContainer.innerHTML = `
      <h3>Comments:</h3>
      <ul>
        ${comments.map((comment) => `${comment.name}: ${comment.body}`).join('')}
      </ul>`;
};
