const express = require('express');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(cors()); 

app.get('/title', (req, res) => {
    res.json({ title: 'Responsive VR Website' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});