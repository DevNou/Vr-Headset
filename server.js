const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public')); 

app.get('/api/title', (req, res) => {
    const title = 'Responsive VR Website'
    res.json({ title });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});