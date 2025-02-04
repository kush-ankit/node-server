const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("GET request");
    res.json({url:"https://www.google.com/"})
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});