const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const user = {
        name: "Frank C.",
        surname: "Goldman",
        position: "Sales Executive",
        phone: "+009 567 14586",
        email: "info@company.com",
        website: "www.yourwebsite.com",
        address: "1234 Shinn Street New York, N48"
    };
    
    res.render('index', user);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
