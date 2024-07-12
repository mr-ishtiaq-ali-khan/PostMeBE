const express = require('express');

const getPosts = require('./src/api/getPosts.js');
const savePost = require('./src/api/savePost.js');
const deletePost = require('./src/api/deletePost.js');

const { constants, GET_POSTS, ADD_POST, DELETE_POST } = require('./constants.js');
const { paths, port } = constants;

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

server.get(paths[GET_POSTS] , getPosts);

server.post(paths[ADD_POST], savePost);

server.post(paths[DELETE_POST], deletePost)

server.get(paths.all, (req, res) => {
    res.status(200).send('<h1>Custom not found</h1>')
})

server.listen(port, () => {
    console.log(`listening at port ${port}`);
});

