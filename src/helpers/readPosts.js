const path = require('path');
const fs = require('fs');

const dataFilePath = path.resolve(__dirname, '../../data.json');

const readPosts = () => {
    try {
        return fs.readFileSync(dataFilePath, 'utf8');
    } catch (error) {
        console.error("Error reading data.json:", error);
    }
}

module.exports = readPosts;