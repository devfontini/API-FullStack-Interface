const express = require('express');
const app = express();

app.get('/tasks', (req, res) => {
    res.json([{ id: 1, title: "Task 1" }, { id: 2, title: "Task 2" }]);
});

app.listen(3000, () => console.log('API rodando na porta 3000'));
