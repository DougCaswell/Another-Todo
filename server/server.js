const express = require('express');

let app = express();
app.use(express.json());

let list = [{ task: 'practice', id: 0 }];
let id = 0;

app.get('/api/get', (req, res) => {
    res.status(200).send(list)
})

app.post('/api/new', (req, res) => {
    const { item } = req.body;
    id++;
    list.push({ task: item, id: id });
    res.status(200).send(list);
})

// app.put('/api/edit', (req, res) => {

// })

app.delete('/api/delete/:id', (req, res) => {
    const { id } = req.params;
    let start = list.findIndex((item) => item.id == id);
    list.splice(start, 1)
    res.status(200).send(list)
})

app.listen(4444, () => console.log('app is running on port 4444'));