const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', message: 'Hello from EJS!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
