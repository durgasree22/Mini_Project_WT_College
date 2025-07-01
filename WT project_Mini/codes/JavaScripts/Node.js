// server.js
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/get-news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=hospitality&apiKey=YOUR_API_KEY');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news', error });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
