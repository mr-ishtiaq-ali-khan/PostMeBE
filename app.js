const express = require('express');
const cors = require('cors');

const getPosts = require('./src/api/getPosts.js');
const savePost = require('./src/api/savePost.js');
const deletePost = require('./src/api/deletePost.js');

const { constants, GET_POSTS, ADD_POST, DELETE_POST } = require('./src/constants.js');
const { paths, port } = constants;

const server = express();

const corsOptions = {
    credentials: true,
    origin: ['https://main--postme-by-ali.netlify.app', 'http://localhost:5174'] // Whitelist the domains you want to allow
};


// Middleware to parse JSON bodies
server.use([express.json(), cors(corsOptions)]);

server.get(paths[GET_POSTS] , getPosts);

server.post(paths[ADD_POST], savePost);

server.post(paths[DELETE_POST], deletePost)

server.get(paths.all, (req, res) => {
    res.status(200).send('<h1>Custom not found</h1>')
})

server.listen(port, () => {
    console.log(`listening at port ${port}`);
});

