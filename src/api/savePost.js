const fs = require('fs');
const path = require('path');
const crypto = require("crypto");
const readPosts = require('../helpers/readPosts.js');

const dataFilePath = path.resolve(__dirname, '../../data.json');

const savePost = (req, res) => {
    try {
        // Assuming req.body contains the JSON data you want to save
        const postData = req.body;

        // Read existing posts from data.json
        let posts = readPosts();

        // Parse existing data (assuming it's an array of posts)
        let existingPosts = JSON.parse(posts);

        // Adding UUID to the New Posts data
        const _postData = postData.map((post) => {
            post.uuid = crypto.randomUUID();
            return post
            
        })

        // Append new post data to existing posts
        const allPosts = [..._postData, ...existingPosts];

        // Write back to data.json
        fs.writeFileSync(dataFilePath, JSON.stringify(allPosts, null, 2), 'utf8');

        // Respond with success
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error saving post:", error);
        res.status(500).json({ error: 'Failed to save post' });
    }
}

module.exports = savePost;