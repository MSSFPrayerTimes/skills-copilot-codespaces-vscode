// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create express app
const app = express();

// Use cors
app.use(cors());

// Use body parser
app.use(bodyParser.json());

// Store comments
const commentsByPostId = {};

// Get comments by post id
app.get('/posts/:id/comments', (req, res) => {
    res.status(200).send(commentsByPostId[req.params.id] || []);
});

// Add comment to post
app.post('/posts/:id/comments', (req, res) => {
    // Generate random id
    const commentId = randomBytes(4).toString('hex');

    // Get comment content
    const { content } = req.body;

    // Get comments for post
    const comments = commentsByPostId[req.params.id] || [];

    // Add new comment
    comments.push({ id: commentId, content });

    // Store comments
    commentsByPostId[req.params.id] = comments;

    // Send back created comment
    res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});
