// Enums
const GET_POSTS = "getPosts";
const ADD_POST = "addPost";
const DELETE_POST = "deletePost";

const constants = {
    port: 5002,
    paths: {
        all: "*",
        [GET_POSTS]: `/${GET_POSTS}`,
        [ADD_POST]: `/${ADD_POST}`,
        [DELETE_POST]: `/${DELETE_POST}`,

    },
    apiActions: {
        [GET_POSTS]: GET_POSTS,
        [ADD_POST]: ADD_POST,
        [DELETE_POST]: DELETE_POST,
    }
}

module.exports = {
    GET_POSTS,
    ADD_POST,
    DELETE_POST,
    constants
}