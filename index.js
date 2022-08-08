const express = require('express');
const app = express();
const axios = require('axios');
const port = 8000
const got = require('/got.json')



app.get('/game-of-thrones/json', (req, res) => {
    res.json(got)
})