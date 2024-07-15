const readPosts = require('../helpers/readPosts.js');

const getPosts = (req, res) => {
    try {
        const posts = readPosts();
        res.status(200).json(posts);
    }catch(error) {
        console.error("Error reading data.json:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = getPosts;