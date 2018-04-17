const request = require("request");

function fetchPosts(callback){
  request({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function fetchPostByUser(userId, callback){
  request({
    url: `http://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function fetchPost(id, callback){
  request({
    url: `http://jsonplaceholder.typicode.com/posts/${id}`,
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function fetchUsers(callback){
  request({
    url: "http://jsonplaceholder.typicode.com/users",
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function fetchUser(userId, callback){
  request({
    url: `http://jsonplaceholder.typicode.com/users/${userId}`,
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function fetchComments(callback){
  request({
    url: "http://jsonplaceholder.typicode.com/comments",
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function fetchCommentsByPost(postId, callback){
  request({
    url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function publishPost(userId, title, body, callback){
  request({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    form: {
      "userId": userId,
      "title": title,
      "body": body
    }
  }, (error, response, result) => {
    callback(result);
  });
}

function publishComment(postId, name, email, body, callback){
  request({
    url: "http://jsonplaceholder.typicode.com/comments",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    form: {
      "postId": postId,
      "name": name,
      "email": email,
      "body": body
    }
  }, (error, response, result) => {
    callback(result);
  });
}

function updatePostTitle(postId, newTitle, callback){
  request({
    url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
    method: "PATCH",
    form:{
      "title": newTitle
    }
  }, (error, response, result) => {
    callback(result);
  });
}

function updatePostBody(postId, newBody, callback){
  request({
    url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
    method: "PATCH",
    form:{
      "body": newBody
    }
  }, (error, response, result) => {
    callback(result);
  });
}

function updatePost(postId,newTitle, newBody, callback){
  request({
    url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
    method: "PATCH",
    form:{
      "title": newTitle,
      "body": newBody
    }
  }, (error, response, result) => {
    callback(result);
  });
}

// updatePost(2, "lololol","omegalooooool", console.log);
module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
};
