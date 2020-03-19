const express = require('express');

let app = express();
app.use(express.json());

let list = ['task from database'];

app.get('/api/get', (req, res) => {
    console.log('ping');
    res.status(200).send(list)
})

app.listen(4444, () => console.log('app is running on port 4444'));