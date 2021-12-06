import express from 'express';
import data from './data/data.json'

const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
    res.json(data)
);

app.get('/item/:id', (req, res) => {
    console.log(req.params.id);
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    res.send(data[user]);
});

app.post('/newItem', (req, res) => res.send(`POST request works at ${PORT}`));

app.put('/item', (req, res) => res.send(`PUT request works at ${PORT}`));

app.delete('/item', (req, res) => res.send(`DELETE works at ${PORT}`));

app.listen(PORT, () => {
    console.log(`Alina, your server is runing on ${PORT}`);
    console.log(data);
});

// app.listen(3000, () => console.log("Simple server running on http://localhost:3000"));
