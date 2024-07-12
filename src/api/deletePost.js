const fs = require('fs');
const path = require('path');
const readPosts = require('../helpers/readPosts.js');

const dataFilePath = path.resolve(__dirname, '../../data.json');

const deletePost = (req, res) => {
    try {
        const deletePostId = req.body.uuid;

        // Read existing posts from data.json
        let posts = readPosts();

        // Parse existing data (assuming it's an array of posts)
        let existingPosts = JSON.parse(posts);

        let updatedPosts = existingPosts.filter((post) => post.uuid !== deletePostId)

        // Write back to data.json
        fs.writeFileSync(dataFilePath, JSON.stringify(updatedPosts, null, 2), 'utf8');

        // Respond with success
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error saving post:", error);
        res.status(500).json({ error: 'Failed to save post' });
    }
}

module.exports = deletePost;