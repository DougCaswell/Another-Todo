const express = require('express');

let app = express();
app.use(express.json());

let list = ['task from database'];

app.get('/api/get', (req, res) => {
    res.status(200).send(list)
})

app.post('/api/new', (req, res) => {
    const { item } = req.body;
    console.log(item)
    list.push(item);
    res.status(200).send(list);
})

// app.put('/api/edit', (req, res) => {

// })

// app.delete('/api/delete', (req, res) => {

// })
app.listen(4444, () => console.log('app is running on port 4444'));